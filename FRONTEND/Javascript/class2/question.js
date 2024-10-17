//Question:1 :- Write a JavaScript program that calculates the total bill for a restaurant order. The program should do the following:

let foodPrice = 350;
let drinkPrice = 120;

let totalBill = foodPrice + drinkPrice;

let tip = totalBill + (totalBill * 10) / 100;
console.log("Final amount is ", tip);


//Question-2: Write a JavaScript program that calculates the final price of a product after applying a discount. The program should:

let originalPrice = 2500;
let discount = 499;
let finalPrice = originalPrice - discount
console.log(`The final price of the Product : ${originalPrice} - ${discount} = ${finalPrice}`);


// Write a JavaScript program that calculates the total amount a customer needs to pay after adding sales tax to the product price. The program should:

let productPrice = 35000;
let salesTaxRate = 12;
let actualAmountTax = (productPrice*salesTaxRate)/100;
let actualActualAmount = productPrice + actualAmountTax;
console.log("the total price of product = ",actualActualAmount)