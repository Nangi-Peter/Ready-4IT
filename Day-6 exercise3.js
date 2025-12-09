// Exercise 3: Manager Alert

let beansQuantity = 3;

// Simulate inventory check loop
while (true) {
    console.log(Beans in stock, `${beansQuantity}`);
    
    if (beansQuantity > 0) {
        beansQuantity--;  // Reduce quantity
    }
    
    if (beansQuantity <= 0) {
        console.log("Manager: Beans are now out of stock.");
        break;  // Exit immediately
    }
}