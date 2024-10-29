
//  let newArray = [];
//  console.log(newArray);
//  console.log(typeof newArray);

// let name = "pablo";
// let age = 60;
// let pro = "criminal";
// let isMarried = true;

//reason1: we need everything under a single variable name
//reason2:structured way,code readerly easy to maintain

// let userarr = ["pablo", 60, "criminal", true];
// console.log(userarr);

//Array Declaration
//advance way of writting
// let newNum = new Array(1, 2, 3, 4, 5);
// console.log(newNum);
// console.log(newNum.length);

//traditional way
// let newNum1 = [1, 2, 3, 4, 5];
// console.log(newNum1);

//how to check length
//array.length //array=variable name

//ex:
// let newNum2 = [1, 2, 3, 4, 5];
// console.log(newNum2);
// console.log(newNum2.length);

//Accessing
let city = ["bbsr", "ctc", "bls", "jajpur"];
// console.log(city[0]); //bbsr
// console.log(city[3]); //jajpur

// city.length - 1; //formula
// console.log(city.length - 1);

//print last element
// let lastcity = city.length - 1;
// console.log(city[lastcity]);

//print bls
// console.log(city[2]);
// console.log(city[lastcity - 1]);

//modify
// let modifycity = "kendrapada";
// city[2] = modifycity;
// console.log(city);

//add element
//push()
// console.log(city);
// let addcity = "kjr";
// city.push(addcity);
// console.log(city);

//pop()
// console.log(city);
// city.pop();
// console.log(city);

//shift()
//delete first element
// console.log(city);
// city.shift();
// console.log(city);

//unshift
//add a element in 1st
console.log(city);
city.unshift("baripada");
console.log(city);