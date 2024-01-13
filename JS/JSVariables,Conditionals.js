//There are 3 ways in declaring variables they are 
//1.var(Global way of declaring)
//2.let(scope is in block only and can't redeclare)
//3.const(declare and assign value only once)
var a;
const d=90;
console.log(a);
{
    var a=39;
    console.log(a);
    let c=34;
    c=49;
    console.log(c);
}
console.log(a);
if(a==0)
    console.log("Hi");
else    
    console.log("hello");
