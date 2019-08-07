class Computer {
  constructor(ramMemory, cpuGHz, hddMemory) {
    this.ramMemory = ramMemory;
    this.cpuGHz = cpuGHz;
    this.hddMemory = hddMemory;
    this.taskManager = [];
    this.installedPrograms = [];
    this.cpuGHzUsage = 0;
    this.ramMemoryUsage = 0;
  }

  installAProgram(name, requiredSpace) {
   
    if (this.hddMemory >= requiredSpace) {
      let programObj = {
        name: name,
        requiredSpace: requiredSpace
      }
      this.installedPrograms.push(programObj);
      this.hddMemory -= requiredSpace;
      return programObj;

    } else {
      throw new Error("There is not enough space on the hard drive");
    }

  }

  disuninstallAProgram(name) {
    const programIndex = this.installedPrograms.findIndex(p => p.name === name);

    if (programIndex === -1) {
        throw new Error('Control panel is not responding');
    }

    console.log(programIndex);
    console.log(installedPrograms);
    this.hddMemory += this.installedPrograms[programIndex].requiredSpace;
    this.installedPrograms.splice(programIndex, 1);

    return this.installedPrograms;
  }

  uninstallAProgram(inputProgramName) {

    let checkProgramExists = false;

    for(let i = 0; i < this.installedPrograms.length; i++) {
      let currentProgram = this.installedPrograms[i];
      let currentProgramName = currentProgram["name"];
      let requiredSpace = currentProgram["requiredSpace"];

      if (inputProgramName == currentProgramName) {
        checkProgramExists = true;
        this.hddMemory += requiredSpace;

        console.log(i);
        console.log(currentProgram);

        this.installedPrograms.splice(i, 1);

        return this.installedPrograms;
      }

    }

    if (!checkProgramExists) {
      throw new Error("Control panel is not responding");
    }

  }

  openAProgram(inputProgramName) {

    let isProgramInstalled = this.checkProgramInstalled(inputProgramName);
    let isProgramOpen = this.checkProgramOpen(inputProgramName);

    if (!isProgramInstalled) {
        throw new Error(`The ${inputProgramName} is not recognized`);
    }
    if (isProgramOpen) {
      throw new Error(`The ${inputProgramName} is already open`);
    }

    // If the code reaches this point -> open up the program in variable "this.taskManager"
    let programObj = this.getProgramObj(inputProgramName); 
    let programRequiredSpace = programObj.requiredSpace;

    let requiredRam = ((programRequiredSpace / this.ramMemory) * 1.5);
    let requiredCpu = (((programRequiredSpace / this.cpuGHz) / 500) * 1.5);
  
    if (this.ramMemoryUsage + requiredRam >= 100) {
      throw new Error(`${inputProgramName} caused out of memory exception`);
    }
    if (this.cpuGHzUsage + requiredCpu >= 100) {
      throw new Error(`${inputProgramName} caused out of cpu exception`);
    }

    this.ramMemoryUsage += requiredRam;
    this.cpuGHzUsage += requiredCpu;
   
    let newProgramObj = {
      name: programObj.name,
      ramUsage: requiredRam,
      cpuUsage: requiredCpu
    }

    this.taskManager.push(newProgramObj);
    return newProgramObj;
  
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
          resultString += `Name - ${programName} | Usage - CPU: ${cpuUsage.toFixed(0)}%, RAM: ${ramUsage.toFixed(0)}%`;
        } else {
          resultString += `Name - ${programName} | Usage - CPU: ${cpuUsage.toFixed(0)}%, RAM: ${ramUsage.toFixed(0)}%\n`;
        }
      
      }

    } else {
      resultString = "All running smooth so far";
    }

    return resultString;

  }

  getProgramObj(name) {
      for(let i = 0; i < this.installedPrograms.length; i++) {
        let currentProgram = this.installedPrograms[i];
        let currentProgramName = currentProgram["name"];
        let requiredSpace = currentProgram["requiredSpace"];
        if (name == currentProgramName) {
          return {
            name: currentProgramName,
            requiredSpace: requiredSpace
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

  checkProgramOpen(name) {
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

let computer = new Computer(4096, 7.5, 250000);
computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer);
console.log(computer.taskManagerView());
