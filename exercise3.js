//1. Tonnage Validation
javascript
let procurementTonnage = 1500; // kg
let meetsRequirement = procurementTonnage >= 1000;
console.log(meetsRequirement); // true

//2. Strictness Check
javascript
let costStr = '5000';
let costNum = 5000;
// Loose comparison (==)
let looseComparison = costStr == costNum; // true (type coercion occurs)

// Strict comparison (===)
let strictComparison = costStr === costNum; // false (no type coercion)

console.log(`Loose comparison (==): ${looseComparison}`); // true
console.log(`Strict comparison (===): ${strictComparison}`); // false


//Why === is safer for KGL  because:

/*
No type coercion - It doesn't convert types before comparison

Prevents unexpected behavior - String '5000' and number 5000 are different types

More predictable - Eliminates hidden bugs from automatic type conversion

Better for financial calculations - In procurement/cost systems, exact type matching is crucial

Follows best practices - Most coding standards require strict comparison
*/

//For KGL's procurement system where precision matters, === ensures you're comparing exactly what you intend to compare.