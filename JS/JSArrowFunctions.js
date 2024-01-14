function run()
{
    console.log("Good Morning");
}
run();
let greet=()=>{console.log("Good Morning")};
greet();

let greeting=()=> console.log("Good Morning Welcome");
greeting();

let object={

    names:['hari','madhu','vishnu','bunny','sonu'],
    speak()
    {
    this.names.forEach((student)=> console.log(student+"Good Morning"));
    }
}
object.speak();