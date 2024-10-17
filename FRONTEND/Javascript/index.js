console.log(add);
var add="bbsr";
console.log(add);

//let user;
let user=null;
console.log(typeof null);//object
console.log(user);
console.error("error");
console.warn("warning");

// let arr=["mantu","mangal","mahip"];
// console.log(arr);

let student={
    name:"mangal singh",
    age:22,
    cgpa:8.0,
    ispass:true,
};
for(let key in student){
    console.log("key=",key);
    console.log("value=",student[key]);
}