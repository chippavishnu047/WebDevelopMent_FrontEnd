var a=4;
//there are 2 ways of declaring strings using '' and ""
var string1='This is String';
var string2="this is also String";
var string3=new String("this is also String");
console.log(string1);
console.log(string2);
console.log(string3);
temp=`${string1}${string2}`;
console.log(temp);
// to use '' and "" ,use ``(backticks) and also called as dynamically assigning something
temp=`${string1} is example to use '' and "" within a string`;
console.log(temp);
var len=string3.length;
console.log(`Length of String3 is ${len}`);
// you can write html code via js also
// document.getElementById('content').innerHTML=' <h1> this is h1 heading </h1> ';
//String Mehtods
var s="String";
console.log(s);
//slice,substring method takes parameters as starting index to end index
console.log(s.substring(1,5));
console.log(s.slice(1,5));
//substr method takes parameters as starting index and length of substring 
console.log(s.substr(1,5));

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.charAt(3));
console.log(s.charCodeAt('A'));