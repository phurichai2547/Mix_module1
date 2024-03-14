class Product {
    constructor(name, description, price, quantity) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        if (this.price <= 0 || this.quantity <= 0) {
            return undefined;
        }
        return this.price * this.quantity;
    }

    sell(quantity) {
        if (quantity <= 0 || quantity > this.quantity) {
            return undefined;
        }
        this.quantity -= quantity;
        return { name: this.name, quantity: quantity };
    }

    restock(quantity) {
        if (quantity <= 0) {
            return undefined;
        }
        this.quantity += quantity;
        return this.quantity;
    }

    isInStock() {
        return this.quantity > 0;
    }

    comparePrice(otherProduct) {
        return this.price - otherProduct.price;
    }
}

// Usage of the Product class
let product1 = new Product("Apple iPhone 15 pro max 1 tb", "Latest model of iPhone with advanced features", 1000, 50);
let product2 = new Product("Samsung Galaxy S24 Ultra 1 tb", "High-end Android smartphone", 800, 75);
let product3 = new Product("Sony Headphones", "Noise-cancelling over-ear headphones", 200, 150);
let product4 = new Product("Asus Gaming Laptop", "High-performance gaming laptop with the latest GPU", 2000, 30);

// Test methods
console.log("Total Price of product1:", product1.getTotalPrice());
console.log("Sell product2:", product2.sell(10));
console.log("Restock product3:", product3.restock(20));
console.log("Is product4 in stock?", product4.isInStock());
console.log("Compare prices of product1 and product3:", product1.comparePrice(product3));
