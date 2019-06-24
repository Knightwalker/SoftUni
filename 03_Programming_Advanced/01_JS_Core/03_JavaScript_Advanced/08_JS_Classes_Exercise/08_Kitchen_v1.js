class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = [];
        this.productsInStock  = {};
        this.actionsHistory = [];
    }

    loadProducts(inputArr) {
        for(let i = 0; i < inputArr.length; i++) {
            let splittedInputArr = inputArr[i].split(" ");
            let productName = splittedInputArr[0];
            let productQuantity = Number(splittedInputArr[1]);
            let productPrice = Number(splittedInputArr[2]);

            if (this.budget - productPrice >= 0) {
                if (!this.productsInStock[productName]) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
                this.budget -= productPrice;
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(mealName, mealProductsArr, mealPrice) {
        if (!this.menu[mealName]) {
            this.menu[mealName] = {};
            this.menu[mealName]["productsArr"] = mealProductsArr;
            this.menu[mealName]["price"] = Number(mealPrice);
            return `Great idea! Now with the ${mealName} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${mealName} is already in our menu, try something different.`;
        }
    }

    showTheMenu() {
        let res = "";

        if (Object.keys(this.menu).length > 0) {
            for (let meal in this.menu) {
                res += `${meal} - $ ${this.menu[meal]["price"]}\n`;
            }
        } else {
            res = "Our menu is not ready yet, please come later...";
        }

        return res;
    }

    makeTheOrder(mealName) {
        if (!this.menu[mealName]) {
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        } else {

            // checking products;
            let validateProductName = true;
            let validateProductQuantity = true;
            for (let currentProductPair in this.menu[mealName]["productsArr"]) {
                let currentProductPairArr = this.menu[mealName]["productsArr"][currentProductPair].split(" ");
                let currentProductName = currentProductPairArr[0];
                let currentProductQuantity = Number(currentProductPairArr[1]);

                if (!this.productsInStock[currentProductName]) {
                    validateProductName = false;
                    validateProductQuantity = false;
                    break;
                } else {
                    if (this.productsInStock[currentProductName] < currentProductQuantity) { 
                        validateProductName = false;
                        validateProductQuantity = false;
                        break;
                    }
                }
            }

            if (validateProductName && validateProductQuantity) {
                for (let currentProductPair in this.menu[mealName]["productsArr"]) {
                    let currentProductPairArr = this.menu[mealName]["productsArr"][currentProductPair].split(" ");
                    let currentProductName = currentProductPairArr[0];
                    let currentProductQuantity = Number(currentProductPairArr[1]);
                    this.productsInStock[currentProductName] -= currentProductQuantity;
                }
                this.budget += this.menu[mealName]["price"];
                return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${this.menu[mealName]["price"]}.`;
            } else {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
            }

        }
    }
    
}


let kitchen = new Kitchen (1000);
kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);