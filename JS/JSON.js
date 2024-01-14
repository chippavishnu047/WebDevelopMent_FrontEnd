let employee={
    name:"vishnu",
    salary:20,
    age:22
}
let js=JSON.stringify(employee);
console.log(employee);
console.log(js);
let json=js.replace("vishnu","bunny");
let jsonchange=JSON.parse(json);
console.log(jsonchange)