//write a function print your name.

// function printName(){
//     console.log(`my name is mangal`);   
// }
//  printName();
//  printName();

//  function printName(name){
// console.log(`my name is ${name}`);  
//  }
//  printName("mangal");

//return keyword
// function printName(name,age,city){
//     return `my name is ${name},${age},${city}`; //stop
//     console.log("i am stop here");

// }
// console.log(printName("mangal",22,"bbsr"));//function call or invokation

// function printName(name,age,city){
//     return `my name is ${name},age is ${age},city is ${city}`;
// }
// let output=printName(`mangal`,22,`bbsr`);
// console.log(output);


//console.log(printName("mangal"));
// const printName=(name) =>{
//     return `my name is ${name}`;
// }
// console.log(printName("mangal"));

//write a function to print greetings to user.

// function greeting(name,time)
// {
//     if(time<12)
//     {
//         return (`hy ${name} good morning`)
//     }
//     else if(time<18)
//     {
//         return (`hy ${name} good afternoon`)
//     }
//     else{
//         return (`hy ${name} good evening`)
//     }
// }

// const greeting=(name,time)=>
// {
//     if(time<12)
//     {
//         return (`hy ${name} good morning`)
//     }
//     else if(time<18)
//     {
//         return (`hy ${name} good afternoon`)
//     }
//     else{
//         return (`hy ${name} good evening`)
//     }
// };
// const output=greeting("mangal",14);
// console.log(output);

//simple calculator using function and switch statement.

// const calculator = (a,b,operator)=>{
//     switch(operator){
//             case "+":
//                return a+b;
//             break;
//             case "-":
//                 return a-b;
//             break;
//             case "*":
//                 return a*b;
//             break;
//             case "/":
//                 return a/b;
//             break;
//             default:
//                 return "invalid operator";
//                 break;
//     }
// };
//const output = calculator(10,5,"+");
//console.log(output);

//const add=(a,b)=>console.log(add(5,6));

// const add =(a,b)=>a+b;
// console.log(add(5,7));

//Todo BMI calculator

// const calculatorBmi=(weight,height)=>{
//    let bmi=weight/(height*height);
//    return bmi.toFixed(2);
// };

// let height=5.4;
// let weight=70;
// let bmi=calculatorBmi(weight,height);
// console.log("your bmi is:" +bmi);

//todo make a user authentication system using callback function
// const autentication = (enteredData, callback) => {
//     return callback(enteredData);
// }
// const verify = (userData) => {
//     let user = "user";
//     let admin = "admin"
//     if(userData === user){
//         return "he is a user";
//     }else if (userData === admin) {
//         return "he is a admin";
//     }else {
//         return "not a authorized persone";
//     }
// }
// console.log(autentication("mangal", verify));

// setTimeout(()=>{
//     console.log("hey usbm");
// },5000);//after 5sec it will print

// setInterval(()=>{
//     console.log("hey usbm");
// },1000);//every 1sec it will print

//rest parameter

// const printNumbers=(...numbers)=>{
//     return numbers;
// }
// let output = printNumbers(1,2,3,4,5,6,7,8,9);
// console.log(output);

