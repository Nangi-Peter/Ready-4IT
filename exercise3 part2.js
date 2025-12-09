//complex validation//
(dealerName.length()>=2) && (costUgx.as("Number")>=10000)

// Date Logging//

const saleDate = new Date(2025, 2, 12); // March 12, 2025
const timestamp = 
  `Sale on: ${saleDate.getDate()}/${saleDate.getMonth() + 1}/${saleDate.getFullYear()}`;

console.log(timestamp);