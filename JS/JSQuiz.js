//take 2 numbers and find min,max in it
let a=10;
let b=123;
function max(a,b)
{
    if(a>b)
        return a+"is Greater";
    else if(a<b)
        return b+"is Greater";
    else        
        return "Both are Equal";
}
function min(a,b)
{
    if(a<b)
        return a+"is minimum";
    else if(a>b)
        return b+"is minimum";
    else        
        return "Both are Equal"
}
console.log(min(a,b));
console.log(max(a,b));