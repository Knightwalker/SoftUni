class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
        this.tempRamMemory = 0;
        this.tempCpuGHz = 0;
    }

    installAProgram(name, requiredSpace) {

        if (Number(requiredSpace) >= this.hddMemory) {
            throw new Error("There is not enough space on the hard drive");
        } else {
            this.hddMemory -= Number(requiredSpace);
        }

        let newObj = {
            "name": name,
            "requiredSpace": requiredSpace
        }
        this.installedPrograms.push(newObj);
        return newObj;
    }

    uninstallAProgram(name) {
        
        let found = false;
        for(let i = 0; i < this.installedPrograms.length; i++) {
            let currentProgram = this.installedPrograms[i];
            let returnArr = currentProgram;

            let currentName = currentProgram.name;
            let space = currentProgram.requiredSpace;

            if (currentName == name) {
                found = true;
                this.installedPrograms.splice(i, 1);
                this.hddMemory += Number(space);
                return returnArr;
            } 

            // console.log(currentProgram);
            // console.log(currentName);
        }

        if (found == false) { throw new Error("Control panel is not responding"); }
       
    }

    openAProgram(name) {

        let found1 = false;
        let foundProgramObj = [];
        for(let i = 0; i < this.installedPrograms.length; i++) {
            let currentProgram = this.installedPrograms[i];
            
            let currentName = currentProgram.name;
            let space = currentProgram.requiredSpace;

            if (currentName == name) {
                found1 = true;
                foundProgramObj = currentProgram;
                break;
            } 
        }
        if (found1 == false) { throw new Error(`The ${name} is not recognized`); }



        let found2 = false;
        let found2ProgramObj = {};
        for(let i = 0; i < this.taskManager.length; i++) {
            let currentProgram = this.taskManager[i];
            
            let currentName = currentProgram.name;
            let space = currentProgram.requiredSpace;

            if (currentName == name) {
                found2 = true;
                found2ProgramObj = currentProgram;
                break;
            } 
        }
        if (found2 == true) 
        { 
            throw new Error(`The ${name} is already open`); 

        } else if (found2 == false) {
            //console.log(foundProgramObj);
            let programRequiredSpace = foundProgramObj.requiredSpace;
            let requiredRam = (programRequiredSpace / this.ramMemory) * 1.5;
            let requiredCpu = ((programRequiredSpace / this.cpuGHz) / 500) * 1.5;

            this.tempRamMemory += Number(requiredRam);
            this.tempCpuGHz += Number(requiredCpu);

            if (this.tempRamMemory >= this.ramMemory) {
                throw new Error(`${name} caused out of memory exception`); 
            }
            if (this.tempCpuGHz >= this.cpuGHz) {
                throw new Error(`${name} caused out of cpu exception`); 
            }

            let newObj = {
                "name": name,
                "ramUsage": requiredRam,
                "cpuUsage": requiredCpu
            }
            this.taskManager.push(newObj);
            return newObj;
        }

    }



}