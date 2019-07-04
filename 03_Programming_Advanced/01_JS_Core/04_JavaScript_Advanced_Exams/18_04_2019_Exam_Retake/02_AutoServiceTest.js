class AutoService {

    constructor(garageCapacity) {
        this.garageCapacity = garageCapacity;
        this.workInProgress = [];
        this.backlogWork = [];
    }

    get availableSpace() {
        return this.garageCapacity - this.workInProgress.length;
    }

    repairCar() {

        let workingPlace = this.workInProgress.length > 0 ? this.workInProgress : this.backlogWork;

        if (workingPlace.length > 0) {

            let keysForRepair = [];
            Object.keys(workingPlace[0].carInfo)
                .filter((k) => workingPlace[0].carInfo[k] === 'broken')
                .forEach((k) => keysForRepair.push(k));

            workingPlace.shift();
            if (keysForRepair.length > 0) {
                return `Your ${keysForRepair.join(' and ')} were repaired.`;
            } else {
                return 'Your car was fine, nothing was repaired.'
            }
        }
        else {
            return 'No clients, we are just chilling...'
        }
    }

    signUpForReview(clientName, plateNumber, carInfo) {

        let currentClient = {
            plateNumber,
            clientName,
            carInfo
        };

        if (this.availableSpace > 0) {
            this.workInProgress.push(currentClient);
        } else {
            this.backlogWork.push(currentClient);
        }
    }

    carInfo(plateNumber, clientName) {

        let checkCar =
            this.workInProgress.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0] ||
            this.backlogWork.filter((carInfo) => carInfo.plateNumber === plateNumber && carInfo.clientName === clientName)[0];

        if (checkCar) {
            return checkCar;
        } else {

            return `There is no car with platenumber ${plateNumber} and owner ${clientName}.`;
        }
    }
}

const assert = require('chai').assert;

describe("AutoService Tests", function(){

    it("Test instantiation", function(){
        let autoService = new AutoService();

        // check default value for arr - blacklogWork
        let expected = 0;
        let actual = autoService.backlogWork.length;
        assert.equal(actual, expected);

        // check default value for arr - workInProgress
        actual = autoService.workInProgress.length;
        assert.equal(actual, expected);

    });

    it("Test instantiation with -1", function(){
        let autoService = new AutoService(-1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        // check value for arr - blacklogWork
        let expected = 1;
        let actual = autoService.backlogWork.length;
        assert.equal(actual, expected);
    });

    it("Testing getter availableSpace", function(){
        let autoService = new AutoService(2);
        let expected = 2;
        let actual = autoService.garageCapacity;
        assert.equal(actual, expected);
    })

    it("Testing getter availableSpace", function(){
        let autoService = new AutoService(2);
        let expected = 2;
        let actual = autoService.availableSpace;
        assert.equal(actual, expected);
    })

    it("Testing function signupForReview", function(){
        let autoService = new AutoService(2);
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        let expectedWorkInProgressLen = 1;
        let actualWorkInProgressLen =  autoService.workInProgress.length;
        assert.equal(actualWorkInProgressLen, expectedWorkInProgressLen);

        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});

        expectedWorkInProgressLen = 2;
        actualWorkInProgressLen =  autoService.workInProgress.length;
        assert.equal(actualWorkInProgressLen, expectedWorkInProgressLen);
        
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});

        expectedBacklogWorkLen = 1;
        actualBacklogWorkLen =  autoService.backlogWork.length;
        assert.equal(actualBacklogWorkLen, expectedBacklogWorkLen);   
        
        let expectedAvaliableSpace = 0;
        let actualAvaliableSpace = autoService.availableSpace;
        assert.equal(actualAvaliableSpace, expectedAvaliableSpace);

        // expectedWorkInProgressLen = 1;
        // actualWorkInProgressLen =  autoService.workInProgress.length;
        // assert.equal(actualWorkInProgressLen, expectedWorkInProgressLen);

        // let actualCarInfo = autoService.carInfo('PB9999PB', 'PHILIP');
        // assert.equal(aactualCarInfo, "There is no car with platenumber PB9999PB and owner PHILIP.");
    })

    it("Testing repair", function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        let expected = "Your doors were repaired.";
        let actual = autoService.repairCar();
        assert.equal(actual, expected);
    });

    it("Testing carInfo with -1 - this test does nothing", function(){
        let autoService = new AutoService(-1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        let expected = "There is no car with platenumber undefined and owner undefined.";
        let actual = autoService.carInfo();
        assert.equal(actual, expected);
    });

    it("Testing carInfo", function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        
        let actual = typeof autoService.carInfo('CA1234CA', 'Joni');
        let expected = "object";
        assert.equal(actual, expected);
    });

    it("Testing carInfo", function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Boni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        
        let actual = typeof autoService.carInfo('CA1234CA', 'Boni');
        let expected = "object";
        assert.equal(actual, expected);
    });

    it("Testing carInfo", function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});      
        autoService.carInfo('CA1234CA', 'Joni');
        autoService.repairCar();

        let expected = "There is no car with platenumber CA1234CA and owner Joni.";
        let actual = autoService.carInfo('CA1234CA', 'Joni');
        assert.equal(actual, expected);       
    });

    it("Testing nocars to be repaired", function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'ZFAD999'});      
        let actual = autoService.repairCar();
        let expected = "Your car was fine, nothing was repaired.";
        assert.equal(actual, expected);       
    });

    it("Testing nocars to be repaired", function(){
        let autoService = new AutoService(1);
        autoService.signUpForReview('Joni', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'ZFAD999'});    
        autoService.repairCar();  
        let actual = autoService.repairCar();
        let expected = "No clients, we are just chilling...";
        assert.equal(actual, expected);       
    });

});