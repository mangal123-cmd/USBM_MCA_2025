//Q1. Write a program that calculates the sum of all digits of a given number using a loop.
let num=1234;
let sum=0;
while(num>0){
  let rem=num%10;
  sum+=rem;
  num = Math.floor(num / 10); 
}
console.log("The sum of the number is : " ,sum)

console.log("----------------------");

//Q2. Print the Fibonacci series up to a given number of terms.
let n=10;
  let a = 0, b = 1;
for (let i = 1; i <= n; i++) {
    console.log(a); //0
    let nextTerm = a + b; //0+1=1
    a = b; // means value of b is assign to a i,e a=1
    b = nextTerm; // b=1
  }

  console.log("----------------------");

  //Q3. Write a program that prints the multiplication table of a number using a for loop.
let num2=10;
console.log(`Multiplication Table of ${num2}:`);
for(let i=1;i<=num2;i++){
  let result=i*num2;
  console.log(`${num2} x ${i} = ${result}`);
}

console.log("----------------------");

//Q5.pattern
//1.
  // *
  // **
  // ***
  // ****
  // *****

  for(let i=1; i<=5; i++){
        let pattern = "";
       for(let j=1; j<=i; j++){
         pattern += "*";
         }
        console.log(pattern);
  }

  console.log("----------------------");
  //2.
  //               *****
  //               ****
  //               ***
  //               **
  //               *
  

  for (let i = 5; i >= 1; i--) {
    pattern = "";
     for (let j = 1; j <= i; j++) {
       pattern += "*";
     }
     console.log(pattern);
   }

   console.log("----------------------");

   //3.
   //        *
   //       ***
   //      *****
   //     *******
   //    *********

   for (let i = 1; i <= 5; i++) {
    let pattern = "";
    // for spaces
    for (let j = 1; j <= 5 - i; j++) {
      pattern += " ";
    }
    // for stars
    for (let j = 1; j <= (2*i-1); j++) {
      pattern += "*";
    }
    
    console.log(pattern);
  }

  console.log("----------------------");

  //4.
  //    *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *

for (let i=1; i<= 5; i++) {
     let pattern = "";
     // for above part spaces
     for (let j=1; j<=5-i; j++) {
       pattern += " ";
     }
   //for above part stars
     for (let j=1; j<=(2*i-1); j++) {
       pattern += "*";
     }
     console.log(pattern);
   }
   //again for lower
 for (let i = 5-1; i>=1; i--) {
   let pattern = "";
   // Add spaces for the lower 
   for (let j=1; j<=5-i; j++) {
     pattern += " ";
  }
  // for the lower part,print *
   for (let j=1; j<=(2 * i - 1); j++) {
     pattern += "*";
  }
   // for the lower half part
   console.log(pattern);
 }

 console.log("----------------------");

//5.
// *****
// *   *
// *   *
// *   *
// *****

let totalRows = 5; 
let totalCols = 5; 
// Outer loop
for (let i = 1; i <= totalRows; i++) {
  let pattern = ""; // Initialize an empty string for each row
  // Inner loop
  for (let j = 1; j <= totalCols; j++) {
    if (i === 1 || i === totalRows || j === 1 || j === totalCols) {
      pattern += "*"; // Print star for boundary
    } else {
      pattern += " "; 
    }
  }
  console.log(pattern); 
}