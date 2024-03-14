class Stock {
    constructor() {
        this.stockItems = [];
    }

    findItemIndexById(id) {
        return this.stockItems.findIndex(item => item.itemld === id);
    }

    addItem(id, amount) {
        if (id === null || id === undefined || amount === null || amount === undefined) {
            return -1;
        }

        const index = this.findItemIndexById(id);

        if (index !== -1) {
            this.stockItems[index].quantity += amount;
            return amount;
        } else {
            this.stockItems.push({ itemld: id, quantity: amount });
            return amount;
        }
    }

    addItems(items) {
        let successCount = 0;

        items.forEach(item => {
            const addedAmount = this.addItem(item.itemld, item.quantity);
            if (addedAmount !== -1) {
                successCount++;
            }
        });

        return successCount;
    }

    sell(id, amount) {
        const index = this.findItemIndexById(id);

        if (index !== -1) {
            if (this.stockItems[index].quantity >= amount) {
                this.stockItems[index].quantity -= amount;
                return amount;
            } else {
                const soldAmount = this.stockItems[index].quantity;
                this.stockItems[index].quantity = 0;
                return soldAmount;
            }
        } else {
            return -1;
        }
    }

    getAllStockAmount() {
        let totalAmount = 0;
        this.stockItems.forEach(item => {
            totalAmount += item.quantity;
        });
        return totalAmount;
    }
}

// Example usage:
const stock = new Stock();
stock.addItems([{ itemld: 102, quantity: 2 }, { itemld: 103, quantity: 53 }, { itemld: 103, quantity: 13 }]);
console.log(stock.getAllStockAmount()); // Output: 68
stock.addItems([{ itemld: 102, quantity: 10 }, { itemld: null, quantity: 53 }, { itemld: 103, quantity: 53 }]);
console.log(stock.getAllStockAmount()); // Output: 120
stock.addItems([{ itemld: 101, quantity: 503 }, { itemld: 200, quantity: 103 }, { itemld: 211, quantity: 203 }, { itemld: null, quantity: 503 }, { itemld: 1013, quantity: 0 }, { itemld: 301, quantity: 53 }]);
console.log(stock.getAllStockAmount()); // Output: 1122
stock.sell(102, 5);
console.log(stock.getAllStockAmount()); // Output: 117

// 5 # Stock Requirement
// • Write a class called Stock that consists of the following object properties and functions:
// Properties:
// • stockltems (An array of stock items): is a stock of items. An array contains stock item objects which each stock item object stores
// • itemld (Number): each item has a unique id
// • quantity (Number): a stock amounts of item
// • For example, I{ itemld: 101, quantity: 10 3, { itemld: 102, quantity: 500 }]
// Functions:
// • constructor): creates a new stock object without the provided parameters. Your constructor must initial stockitems property
// to an empty array (0).
// • findltemindexid): returns the index of the first stock item object that matches id parameters. If no stock item matches,
// -1 is returned.
// • additem(id, amount): creates a new stock item object with the provided prarameter id and amount.
// In either parameter is null or undefined then return -1. You must call findltemindex to check if the item already exists 
//in the stockltems array. If the item already exists, the stock amount is increased. otherwise, adding a new stock 
//item is added to the end of stockitems array and then the added amount is returned.
// • additems(items) : adds each item by calling additem from the provided items array parameter then returns 
// the number of sucessfully items added to a stockltems array. For example,
// adaltems( { itemla: 102, quantity: 2 }, ( itemld: 103, quantity: 5 3, { itemld: 103, quantity: 0 3 1) return 3
// additems { itemld: 102, quantity: 10}, { itemld: null, quantity: 5 3, { itemld: 103, quantity: 5 3 1) return 2
// additems { itemld: 101, quantity: 50 3, { itemld: 200, quantity: 10 3, {itemld: 211, quantity: 20 3, & quantity: 50 3, { itemld: 1013, 0, {itemld: 301, quantity: 5 3 ]) return 4
// Functions:
// • sell(id, amount): Before decreasing the stock amount with the selling amount received from the provided parameter, 
// you must call findltemindex to check if the item exists in the stockltems array.
// The stock amount must be decreased by the selling amount, and the stock amount must not be allowed to go below zero
//  (or must not sell more than the stock amount). If the item is not found in the stockltems array, -1 is returned.
// • getAllStockAmount): returns the total number of stock amounts of all items.