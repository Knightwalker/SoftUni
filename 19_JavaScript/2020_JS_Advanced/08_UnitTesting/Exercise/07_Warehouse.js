describe("Warehouse", function(){

  describe("constructor", function(){
    it('should initialize with the correct value', function () {
      let warehouse = new Warehouse(5);
      const expected = "5";
      const actual = warehouse.capacity;

      assert.equal(actual, expected);
    });

    it('should initialize with the correct default value', function () {
        let warehouse = new Warehouse(5);
        const expected = JSON.stringify({'Food': {}, 'Drink': {}});
        const actual = JSON.stringify(warehouse.availableProducts);
  
        assert.equal(actual, expected);
      });

    it('should have the correct function properties', function () {
        let warehouse = new Warehouse(5);
        assert.isFunction(warehouse.__proto__.addProduct);
        assert.isFunction(warehouse.__proto__.orderProducts);
        assert.isFunction(warehouse.__proto__.occupiedCapacity);
        assert.isFunction(warehouse.__proto__.revision);
        assert.isFunction(warehouse.__proto__.scrapeAProduct);
    });

    it('should throw error when the value is not a number', function () {
        let warehouse = new Warehouse(5);
        assert.throw(() => {
            warehouse.capacity = "5";
        }, 'Invalid given warehouse space');
    });

    it('should throw error when the value is negative', function () {
        let warehouse = new Warehouse(5);
        assert.throw(() => {
            warehouse.capacity = -10;
        }, 'Invalid given warehouse space');
    });

    it('should throw error when the value is zero', function () {
        let warehouse = new Warehouse(5);
        assert.throw(() => {
            warehouse.capacity = 0;
        }, 'Invalid given warehouse space');
    });
  });

  describe("addProduct", function(){
    it("should add product with proper values", function(){
        let warehouse = new Warehouse(5);
        warehouse.addProduct("Drink", "Coffee", 2);

        let expected = 'Product type - [Food]\n' +
        'Product type - [Drink]\n' +
        '- Coffee 2';

        let actual = warehouse.revision();
        assert.equal(actual, expected);
    });

    it("should add product with proper values, multiple times", function(){
        let warehouse = new Warehouse(5);
        warehouse.addProduct("Drink", "Coffee", 2);
        warehouse.addProduct("Drink", "Coffee", 3);

        let expected = 'Product type - [Food]\n' +
        'Product type - [Drink]\n' +
        '- Coffee 5';

        let actual = warehouse.revision();
        assert.equal(actual, expected);
    });

    it("should add product with proper values, multiple times, test2", function(){
        let warehouse = new Warehouse(5);
        warehouse.addProduct("Drink", "Coffee", 2);
        warehouse.addProduct("Drink", "Coffee2", 3);
        warehouse.addProduct("Drink", "Coffee3", 0);

        let expected = 'Product type - [Food]\n' +
        'Product type - [Drink]\n' +
        '- Coffee 2\n' +
        '- Coffee2 3\n' +
        '- Coffee3 0'
        ;

        let actual = warehouse.revision();
        assert.equal(actual, expected);
    });

    it('should throw error when the warehouse is full', function () {
        let warehouse = new Warehouse(5);
        assert.throw(() => {
            warehouse.addProduct("Drink", "Coffee", 10);
        }, 'There is not enough space or the warehouse is already full');
    });
  });

    describe("orderProducts", function(){
        it("should sort properly by type", function(){
            let warehouse = new Warehouse(5);
            warehouse.addProduct("Drink", "Coffee", 2);
            warehouse.addProduct("Drink", "Coffee2", 3);
            warehouse.addProduct("Drink", "Coffee3", 0);

            warehouse.orderProducts("Drink");
            let expected = 'Product type - [Food]\n' +
            'Product type - [Drink]\n' +
            '- Coffee2 3\n' +
            '- Coffee 2\n' +
            '- Coffee3 0'
            ;
            let actual = warehouse.revision();
            assert.equal(actual, expected);
        });
    });

    describe("occupiedCapacity", function(){
        it("should return capacity properly", function(){
            let warehouse = new Warehouse(5);
            let expected = 0;
            let actual = warehouse.occupiedCapacity();
            assert.equal(actual, expected);

            warehouse.addProduct("Drink", "Coffee", 2);
            expected = 2;
            actual = warehouse.occupiedCapacity();
            assert.equal(actual, expected);

            warehouse.addProduct("Drink", "Coffee2", 3);
            warehouse.addProduct("Drink", "Coffee3", 0);
            expected = 5;
            actual = warehouse.occupiedCapacity();
            assert.equal(actual, expected);
        });
    });

    describe("revision", function(){
        it("should return that the warehosue is empty if there are no products", function(){
            let warehouse = new Warehouse(5);
            let expected = "The warehouse is empty";
            let actual = warehouse.revision();
            assert.equal(actual, expected);  
        });

        it("should work properly with proper values", function(){
            let warehouse = new Warehouse(5);
            warehouse.addProduct("Drink", "Coffee", 1); 
            warehouse.addProduct("Food", "Musaka", 1); 

            let expected = 'Product type - [Food]\n' +
            '- Musaka 1\n' +
            'Product type - [Drink]\n' +
            '- Coffee 1'
            ;

            let actual = warehouse.revision();
            assert.equal(actual, expected);  
        });
    });

    describe("musaka", function(){
        it("should work if we do everything at once???", function(){
            let warehouse = new Warehouse(12);
            warehouse.addProduct("Drink", "Coffee", 1); 
            warehouse.addProduct("Drink", "Coffee2", 3); 
            warehouse.addProduct("Drink", "Coffee3", 2); 
            warehouse.addProduct("Food", "Musaka", 1); 
            warehouse.addProduct("Food", "Musaka2", 3); 
            warehouse.addProduct("Food", "Musaka3", 2); 
            warehouse.orderProducts("Drink");
            
            let expected = 'Product type - [Food]\n' +
            '- Musaka 1\n' +
            '- Musaka2 3\n' +
            '- Musaka3 2\n' +
            'Product type - [Drink]\n' +
            '- Coffee2 3\n' +
            '- Coffee3 2\n' +
            '- Coffee 1'
            ;
            
            let actual = warehouse.revision();
            assert.equal(actual, expected);  
        });
    });





 describe('orderProducts', function () {
        it('should sort food products of a given type in descending order by the quantity', function () {
            let warehouse = new Warehouse(50);

            warehouse.addProduct('Food', 'Pizza', 1);
            warehouse.addProduct('Food', 'Tomato', 5);
            warehouse.addProduct('Food', 'Bred', 3);

            warehouse.orderProducts('Food');

            let expected = 'Tomato Bred Pizza';

            expect(Object.keys(warehouse.availableProducts['Food']).join(' ')).to.be.equal(expected);
        });

        it('should sort drink products of a given type in descending order by the quantity', function () {
            let warehouse = new Warehouse(50);

            warehouse.addProduct('Drink', 'Water', 1);
            warehouse.addProduct('Drink', 'Rakia', 5);
            warehouse.addProduct('Drink', 'Birichka', 3);

            warehouse.orderProducts('Drink');

            let expected = 'Rakia Birichka Water';

            expect(Object.keys(warehouse.availableProducts['Drink']).join(' ')).to.be.equal(expected);
        });

    });

    describe('occupiedCapacity', function () {
        it('should return a number, which represents the already occupied place in the warehouse', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Pizza', 2);
            warehouse.addProduct('Drink', 'Pepsi', 5);

            expect(warehouse.occupiedCapacity()).to.be.equal(7);
        });

    });

    describe('scrapeAProduct', function () {
        it('should throw error with invalid product', function () {
            let warehouse = new Warehouse(60);

            expect(() => warehouse.scrapeAProduct('Banana', 1)).to.throw('Banana do not exist')
        });

        it('should reset product', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Banana', 2);
            warehouse.scrapeAProduct('Banana', 3);

            expect(warehouse.availableProducts['Food']['Banana']).to.be.equal(0);
        });

        it('should not work but it works', function () {
            let warehouse = new Warehouse(60);

            warehouse.addProduct('Food', 'Banana', 20);
            warehouse.scrapeAProduct('Banana', -5);

            expect(warehouse.availableProducts['Food']['Banana']).to.be.equal(25);
        });
    });


});