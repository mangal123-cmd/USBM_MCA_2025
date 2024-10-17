// 1 . Generate random number between 1 to 100;

let a = Math.random() * 100;
console.log("The random number between 1 to 100 = " + Math.ceil(a));

// 2 . Round the number 6.75 down to the nearest integer.

let b = 6.75;

console.log("The nearest integer of 6.75 is = " + Math.round(b));

// 3. Round the number 9.12 up to the nearest integer.

let c = 9.12;
console.log("The nearest integer of 9.12 is = " + Math.round(c));

// 4. Generate a random number between 5 and 27 (inclusive).

let start = 5;
let end = 27;

/*
    (end-start)+1 = 27 - 5 + 1 = 23 ; that means the Math.random() give the number between 0 to 23 
    when i add start with i.e 5 to move the range 5 to 27  
*/
let random = Math.floor(Math.random() * (end - start + 1)) + start;
console.log("random number between 5 and 27 = " + random);

//5. Add 5 days to the current date.

let currentdate = new Date();
console.log(
  `the current date is = ${currentdate.getDate()} add 5 day to it the date is move to = ${
    currentdate.getDate() + 5
  }`
); // current date = 15 add 5 days = 15 + 5 = 20

//6. Get the number of milliseconds between January 1, 2023, and today.

let startDate = new Date("2023,1,1");

let today = new Date();

let milliseconds = today - startDate;

console.log(
  "Milliseconds between January 1, 2023, and today = " + milliseconds
);

// 7. Get the current hour.

let currentHour = new Date();
console.log("current hour = " + currentHour.getHours());

//8.  Create a date for January 1, 2025.

let createDate = new Date(2025, 1, 1);

console.log("Create a date for (January 1, 2025) = " + createDate.getDate());

//9. Get the current day of the week (0 for Sunday, 6 for Saturday)

let Day = new Date();

let TodayDay = Day.getDay();

switch (TodayDay) {
  case 0:
    console.log("Sunday");

    break;
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("Tuesday");

    break;
  case 3:
    console.log("wednesday");

    break;
  case 4:
    console.log("Thursday");

    break;
  case 5:
    console.log("Friday");

    break;
  case 6:
    console.log("Saturday");

    break;

  default:
    console.log("not a day");

    break;
}

// 10. Get the current month (0-11)

let Month = new Date();

let currentMonth = Month.getMonth();

switch (currentMonth) {
  case 0:
    console.log("January");

    break;
  case 1:
    console.log("February");

    break;
  case 2:
    console.log("March");

    break;
  case 3:
    console.log("April");

    break;
  case 4:
    console.log("May");

    break;
  case 5:
    console.log("June");

    break;
  case 6:
    console.log("July");

    break;
  case 7:
    console.log("August");

    break;
  case 8:
    console.log("September");

    break;
  case 9:
    console.log("October");

    break;
  case 10:
    console.log("Novemeber");

    break;
  case 11:
    console.log("December");

    break;

  default:
    console.log("not a Month");

    break;
}

//11. What is the difference between getDate() and getDay()

let calender = new Date();
console.log(calender.getDate()); // here is the getDate() that provided the current date of the calender
console.log(calender.getDay()); // her is getDay() provide the day the given date Range between [0 to 6 ]