Online Store System
Class: OnlineStore
Properties:

products (Array): An array containing product objects. Each product object has the following properties:
id (string): A unique identifier for the product.
name (string): The name of the product.
price (number): The price of the product.
quantity (number): The available quantity of the product.
Methods:

constructor(): Initializes the online store with an empty array of products.

viewProducts(): Displays information about all available products.

addProduct(name, price, quantity): Adds a new product to the store with the provided details. The product ID should be automatically generated. If any of the required details is missing, the product is not added, and undefined is returned. Otherwise, a new product object is returned.

updateProduct(id, updatedDetails): Updates the details of a product with the specified ID. The user can update the name, price, quantity, or a mixture of them. If the product is found in the array, update its details. If the product is not found, return undefined.

purchaseProduct(id, quantity): Simulates a purchase by reducing the quantity of the product with the specified ID. If the product is found and the requested quantity is available, update the quantity and return the total cost of the purchase. If the product is not found or the requested quantity is not available, return undefined.

removeProduct(id): Removes a product from the store with the specified ID. If the product is found, remove it and return the removed product object. If the product is not found, return undefined.#   M i x _ m o d u l e 1  
 