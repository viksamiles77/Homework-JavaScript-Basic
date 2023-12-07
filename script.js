const phoneAmount = 30; //quantity
const phonePrice = 119.95; //price
const taxRate = 0.05; //tax 5%=5/100

const tax = phonePrice * taxRate;
const phonePriceWithTax = phonePrice + tax;
const finalPrice = phonePriceWithTax * phoneAmount;

console.log(finalPrice);