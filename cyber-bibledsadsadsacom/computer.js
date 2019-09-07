class Computer {
  constructor(ramMemory, cpuGHz, hddMemory) {
    this.ramMemory = ramMemory;
    this.cpuGHz = cpuGHz;
    this.hddMemory = hddMemory;
    this.taskManager = [];
    this.installedPrograms = [];
    this.hddMemoryUsage = 0;
    this.ramMemoryUsageInPercentage = 0;
    this.cpuGHzUsageInPercentage = 0;
  }

  installAProgram(name, requiredHddMemory) {

    // check if the program is already installed -> throw new error
    if (this.checkProgramInstalled(name)) {
      throw new Error("The program is already installed!");
    }

    // check if installing the program will exceed the hddMemory
      if (this.hddMemoryUsage + requiredHddMemory > this.hddMemory) {
      throw new Error("There is not enough space on the hard drive!");
    }

    // check if there is enough space to install the program
    if (this.hddMemoryUsage + requiredHddMemory <= this.hddMemory) {
      let program = {
        name: name,
        hddMemory: requiredHddMemory
      }
      this.installedPrograms.push(program);
      this.hddMemoryUsage += requiredHddMemory;
      return program;
    }

  }

  uninstallAProgram(name) {
    // check if the program is already installed, if not -> throw new error
    if (!this.checkProgramInstalled(name)) {
      throw new Error("Control panel is not responding.");
    }

    // check if the program is currently opened, if yes -> throw new error
    if (this.checkProgramOpened(name)) {
      throw new Error(`You must first close the ${name}, before uninstalling the program.`);
    }

    for(let i = 0; i < this.installedPrograms.length; i++) {
      let currentProgram = this.installedPrograms[i];
      let currentName = currentProgram["name"];
      let currentHddMemory = currentProgram["hddMemory"];

      if (name == currentName) {
        this.hddMemoryUsage -= currentHddMemory;
        this.installedPrograms.splice(i, 1);

        return this.installedPrograms;
      }

    }

  }

  openAProgram(name) {
    // check if the program is already installed, if not -> throw new error
    if (!this.checkProgramInstalled(name)) {
      throw new Error(`The ${name} is not recognized.`);
    }

    // check if the program is already opened, if not -> throw new error
    if (this.checkProgramOpened(name)) {
      throw new Error(`The ${name} is already open.`);
    }

    // Proceed with opening the program
    let programDataObj = this.getProgramDataObject(name); 
    let programRequiredHddMemory  = programDataObj.hddMemory;

    let requiredRam = ((programRequiredHddMemory / this.ramMemory) * 1.5);
    let requiredCpu = (((programRequiredHddMemory / this.cpuGHz) / 500) * 1.5);
  
    console.log(requiredCpu);
    console.log((programRequiredHddMemory / this.cpuGHz) / 500);

    if (this.ramMemoryUsageInPercentage + requiredRam >= 100) {
      throw new Error(`The ${name} caused out of memory exception.`);
    } else if (this.cpuGHzUsageInPercentage + requiredCpu >= 100) {
      throw new Error(`The ${name} caused out of cpu exception.`);
    } else if ((this.ramMemoryUsageInPercentage + requiredRam >= 100) && (this.cpuGHzUsageInPercentage + requiredCpu >= 100)) {
      throw new Error(`The ${name} caused both out of memory and out of cpu exception.`);
    }
    
    this.ramMemoryUsageInPercentage += requiredRam;
    this.cpuGHzUsageInPercentage += requiredCpu;
   
    let newProgramDataObj = {
      name: name,
      ramUsage: requiredRam,
      cpuUsage: requiredCpu
    }

    this.taskManager.push(newProgramDataObj);
    return newProgramDataObj;

  }

  closeAProgram(name) {
      // check if the program is already installed, if not -> throw new error
      if (!this.checkProgramInstalled(name)) {
        throw new Error(`The ${name} is not recognized.`);
      }
  
      // check if the program is NOT already opened, if not -> throw new error
      if (!this.checkProgramOpened(name)) {
        throw new Error(`The ${name} is not currently opened.`);
      }

      for(let i = 0; i < this.taskManager.length; i++) {
        let currentProgram = this.taskManager[i];
        let currentName = currentProgram["name"];
        let currentRamUsage = currentProgram["ramUsage"];
        let currentCpuUsage = currentProgram["cpuUsage"];
  
        if (name == currentName) {
          this.ramMemoryUsageInPercentage -= currentRamUsage;
          this.cpuGHzUsageInPercentage -= currentCpuUsage;
          this.taskManager.splice(i, 1);
  
          return this.taskManager;
        }
  
      }

  }

  taskManagerView() {
    
    let resultString = "";
    if (this.taskManager.length >= 1) {

      for (let i = 0; i < this.taskManager.length; i++) {
        let item = this.taskManager[i];
        let programName = item["name"];
        let cpuUsage = item["cpuUsage"];
        let ramUsage = item["ramUsage"];

        if (i == this.taskManager.length - 1) {
          resultString += `Program - ${programName} | Usage - CPU: ${cpuUsage.toFixed(0)}%, RAM: ${ramUsage.toFixed(0)}%`;
        } else {
          resultString += `Program - ${programName} | Usage - CPU: ${cpuUsage.toFixed(0)}%, RAM: ${ramUsage.toFixed(0)}%\n`;
        }
      
      }

    } else {
      resultString = "All running smooth so far";
    }

    return resultString;

  }

  getProgramDataObject(name) {
    for(let i = 0; i < this.installedPrograms.length; i++) {
      let currentProgram = this.installedPrograms[i];
      let currentProgramName = currentProgram["name"];
      let hddMemory = currentProgram["hddMemory"];
      if (name == currentProgramName) {
        return {
          name: name,
          hddMemory: hddMemory
        };
      }
    }
  }

  checkProgramInstalled(name) {
    for(let i = 0; i < this.installedPrograms.length; i++) {
        let currentProgram = this.installedPrograms[i];
        let currentProgramName = currentProgram["name"];
        if (name == currentProgramName) {
          return true;
        }
      }
    return false;
  }

  checkProgramOpened(name) {
    for(let i = 0; i < this.taskManager.length; i++) {
        let currentProgram = this.taskManager[i];
        let currentProgramName = currentProgram["name"];
        if (name == currentProgramName) {
          return true;
        }
      }
    return false;
  }

}



const assert = require('chai').assert;
describe('class Computer Tests', function () {
  let computer = undefined;

  beforeEach(function () { 
    computer = new Computer(4096, 7.5, 250000);
  });

  describe('Test Class Instantiation', function () { 
    it('should contain properties ramMemory, cpuGHz, hddMemory, taskManager, installedPrograms', function () {
      assert.property(computer, "ramMemory");
      assert.property(computer, "cpuGHz");
      assert.property(computer, "hddMemory");
      assert.property(computer, "taskManager");
      assert.property(computer, "installedPrograms");
    });

    it('should contain methods installAProgram', function () {
      assert.typeOf(computer.installAProgram, 'function');
      assert.typeOf(computer.uninstallAProgram, 'function');
    });
  });

  describe('Test Method installAProgram', function () { 
    beforeEach(function () { 
      computer.installAProgram('Word', 14000);
      computer.installAProgram('Excel', 10240);
      computer.installAProgram('PowerPoint', 12288);
    });

    it('should should work correctly with valid data', function () {
      let actual = computer.installedPrograms[0].name;
      let expected = "Word";

      assert.equal(actual, expected);
    });

    it('should have length equal to 3 with valid data', function () {
      assert.lengthOf(computer.installedPrograms, 3);
    });

    it('should return an object with proper values', function () {
      let actual = computer.installAProgram('SharePoint', 42288);
      let expected = {
        name: "SharePoint",
        hddMemory: 42288
      }

      assert.deepEqual(actual, expected);
    });

    it('should throw an error if the hddMemory is exceeded', function () {
      assert.throw(() => {
        computer.installAProgram('Pictures.zip', 250000);
      }, 'There is not enough space on the hard drive!');
    });

    it('should throw an error if the program is already installed', function () {
      assert.throw(() => {
        computer.installAProgram('Word', 14000);
      }, 'The program is already installed!');
    });

  });

  describe('Test Method uninstallAProgram', function () { 
    beforeEach(function () { 
      computer.installAProgram('Word', 14000);
      computer.installAProgram('Excel', 10240);
      computer.installAProgram('PowerPoint', 12288);
    });

    it('should return the installedPrograms array property, where the given program name is excluded', function () {
      computer.uninstallAProgram('PowerPoint');

      let actual = computer.installedPrograms;
      let expected = [{ name: "Word", hddMemory: 14000 }, { name: "Excel", hddMemory: 10240 }]
        
      assert.deepEqual(actual, expected);
    });

    it('should throw an error if there is no such program installed', function () {
      assert.throw(() => {
        computer.uninstallAProgram('SharePoint', 14000);
      }, 'Control panel is not responding');
    });

  });

});