class OnlineStore {
    constructor() {
        this.products = [];
    }
    viewProducts() {
        console.log('--- Available Products ---');
        this.products.forEach((product) => {
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}`);
        });
        console.log('--------------------------');
    }
    addProduct(name, price, quantity) {
        if (!name || !price || !quantity) {
            return undefined;
        }
        const newProduct = {
            id: (this.products.length + 1).toString(),
            name: name,
            price: price,
            quantity: quantity,
        }
        this.products.push(newProduct);
        return newProduct;
    }
    updateProduct(id, updatedDetails) {
        const productIndex = this.products.findIndex((product) => product.id === id);

        if (productIndex === -1) {
            return undefined; 
        }

        this.products[productIndex] = {
            ...this.products[productIndex],
            ...updatedDetails,
        };

        return this.products[productIndex];
    }
    purchaseProduct(id, quantity) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1 || this.products[productIndex].quantity < quantity) {
            return undefined;
        }
        this.products[productIndex].quantity -= quantity;
        return this.products[productIndex].price * quantity;
    }
    removeProduct(id) {
        const productIndex = this.products.findIndex((product) => product.id === id);
        if (productIndex === -1) {
            return undefined;
        }
        const removedProduct = this.products.splice(productIndex , 1)[0];
        return removedProduct;
    }

}
// Create an online store
const myStore = new OnlineStore();

// Add products to the store
myStore.addProduct('Laptop', 1200, 10);
myStore.addProduct('Smartphone', 800, 20);
myStore.addProduct('Headphones', 50, 30);
myStore.addProduct('Headphones', 40, 30);

// View available products
myStore.viewProducts();

// Update product details
// อัปเดตข้อมูลของสินค้าที่มี id 1
const updatedProduct = myStore.updateProduct('1', { name: 'High-Performance Laptop', price: 1500, quantity: 5 });
// แสดงข้อมูลสินค้าหลังจากอัปเดต
myStore.viewProducts();
// ตรวจสอบว่าสินค้าถูกอัปเดตถูกต้องหรือไม่
console.log('Updated Product:', updatedProduct);


// Purchase products
// ซื้อสินค้าที่มี id 2 จำนวน 15 ชิ้น
const purchaseCost = myStore.purchaseProduct('2', 15);
// แสดงข้อมูลสินค้าหลังจากการซื้อ
myStore.viewProducts();
// ตรวจสอบว่าการซื้อสินค้าสำเร็จหรือไม่
console.log('Total Purchase Cost:', purchaseCost);


// Remove a product
const removedProduct = myStore.removeProduct('3');
myStore.viewProducts();
console.log('Removed Product:', removedProduct);


