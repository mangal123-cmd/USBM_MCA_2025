// // Exercise 1: Simple Calculator with a Loop

let a = parseInt(prompt("Enter the First Number"));

let b = prompt("Enter your opperation like +,-,*,/,%");

let c = parseInt(prompt("Enter your Second number"));

switch (b) {
  case "+":
    console.log("Two number sum = ", a + c);
    break;
  case "-":
    console.log("Two number minus = ", a - c);
    break;
  case "*":
    console.log("Two number multi = ", a * c);
    break;
  case "/":
    console.log("Two number divide = ", a / c);
    break;
  case "%":
    console.log("Two number modulos = ", a % c);
    break;

  default:
    console.log("Invalid Opperation");
    break;
}


//## Exercise 3: Word Counter

let userInput = prompt("Enter your word");
let count = 0;
for (let i = 0; i < userInput.length; i++) {
  count++;
}
console.log("The total word in the userInput have = ", count);

// ## Exercise 4: Login Attempt Limit

let password = "mangal@123";

i = 1;
while (i <= 3) {
  let v = 4 - i;
  let Attempt = prompt(`Enter your password \nyou have only attemts:${v}`);
  if (password === Attempt) {
    console.log("Login Successfully");
    break;
  } else {
    console.log("Wrong password ");
    console.log("you have only attempts:", 3 - i);
  }

  i++;
}