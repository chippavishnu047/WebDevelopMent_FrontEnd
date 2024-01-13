// datatypes in javascript
// 1.Boolean
// 2.undefined
// 3.null
// 4.integer
// 5.string
//2 ways in creating a array
//you can add any type of data into an array
let names=new Array(1,3,"Hi");
console.log(names);
let name=[1,45.2,"hello"];
console.log(name);
//creating object in js
let employee={
    name:"john",
    salary:2345,
    age:24,
    "salary 2":2342
}
console.log(employee);
console.log(employee.name);
console.log(employee['name']);
console.log(employee["salary 2"]); 
for(let i=0;i<10;i++)
{
    console.log(i);
}