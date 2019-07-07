// Example of a WORKING PizzUni Class
class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}
//module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.

const assert = require('chai').assert;

describe("PizzUni", function () {
    it('instantiation test', function () {

        let pizza = new PizzUni();    

        let expectedOrders = 0;
        let actualOrders = pizza.orders.length;
        assert.equal(actualOrders, expectedOrders);

        let expectedRegUsers = 0;
        let actualRegUsers = pizza.registeredUsers.length;
        assert.equal(actualRegUsers, expectedRegUsers);

        let expectedObj = "object";
        let actualObj = typeof pizza.availableProducts;
        assert.equal(actualObj, expectedObj);
    });

    it('instantiation test2', function () {
        let pizza = new PizzUni();    

        let expectedArr1Len = 3;
        let actualArr1Len = pizza.availableProducts.pizzas.length
        assert.equal(actualArr1Len, expectedArr1Len);
        
        let expectedArr2Len = 3;
        let actualArr2Len = pizza.availableProducts.drinks.length
        assert.equal(actualArr2Len, expectedArr2Len);
    });

    it('register user return obj', function () {
        let pizza = new PizzUni();    

        let actual = typeof pizza.registerUser("test@abv.bg");
        let expected = "object";
        assert.equal(actual, expected);
    });

    it('register user throw error', function () {
        let pizza = new PizzUni();    

        let actual = typeof pizza.registerUser("test@abv.bg");
        let expected = "object";
        assert.equal(actual, expected);
    });

    it('register user throw error', function () {
        let pizza = new PizzUni(); 
        pizza.registerUser("test@abv.bg");
        let email = "test@abv.bg";
        
        assert.throw(() => {
            pizza.registerUser("test@abv.bg");
        }, `This email address (${email}) is already being used!`);
    });

    it('makeanorder test 1 - no user registered', function () {
        let pizza = new PizzUni(); 
        pizza.registerUser("test@abv.bg");
        let email = "test@abv.bg";
        
        assert.throw(() => {
            pizza.makeAnOrder("donz@abv.bg", "pesho", "gosho");
        }, "You must be registered to make orders!");
    });
    
    it('makeanorder test 2 - no pizza ordered', function () {
        let pizza = new PizzUni(); 
        pizza.registerUser("test@abv.bg");
        let email = "test@abv.bg";
        
        assert.throw(() => {
            pizza.makeAnOrder("test@abv.bg", "pesho", "gosho");
        }, "You must order at least 1 Pizza to finish the order.");
    });

    it('makeanorder test 3 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");

        let actual = pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        let expected = 0;
        assert.equal(actual, expected);

        actual = pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        expected = 1;
        assert.equal(actual, expected);
    });

    it('makeanorder test 3 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = pizza.orders.length;
        let expected = 2;
        assert.equal(actual, expected);
    });

    it('makeanorder test 4 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = pizza.registeredUsers[0].orderHistory.length;
        let expected = 2;
        assert.equal(actual, expected);
    });

    it('makeanorder test 5 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = typeof pizza.registeredUsers[0].orderHistory[0];
        let expected = "object";
        assert.equal(actual, expected);
    });

    it('makeanorder test 6 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = typeof pizza.registeredUsers[0].orderHistory[1];
        let expected = "object";
        assert.equal(actual, expected);
    });

    it('makeanorder test 6 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = pizza.orders[0].status;
        let expected = "pending";
        assert.equal(actual, expected);

        actual = pizza.orders[1].status;
        expected = "pending";
        assert.equal(actual, expected);
    });

    it('makeanorder test 6 order pizza', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = pizza.orders[0].email;
        let expected = "test@abv.bg";
        assert.equal(actual, expected);

        actual = pizza.orders[1].email
        expected = "test@abv.bg";
        assert.equal(actual, expected);
    });

    it('complete order test 1', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = typeof pizza.completeOrder();
        let expected = "object";
        assert.equal(actual, expected);
    });

    it('complete order test 2', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        pizza.completeOrder();

        let actual = pizza.orders[0].status;
        let expected = "completed";
        assert.equal(actual, expected);

        actual = pizza.orders[1].status;
        expected = "pending";
        assert.equal(actual, expected);
    });

    it('details order test 1', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = pizza.detailsAboutMyOrder(0);
        let expected = "Status of your order: pending";
        assert.equal(actual, expected);

        pizza.completeOrder();

        actual = pizza.detailsAboutMyOrder(0);
        expected = "Status of your order: completed";
        assert.equal(actual, expected);
    });

    it('user exist', function () {
        let pizza = new PizzUni();    
        pizza.registerUser("test@abv.bg");
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "gosho"); 
        pizza.makeAnOrder("test@abv.bg", "Italian Style", "Coca-Cola");
        
        let actual = typeof pizza.doesTheUserExist("test@abv.bg");
        let expected = "object";
        assert.equal(actual, expected);
    });

});