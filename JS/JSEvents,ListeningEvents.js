// let para=document.getElementById('para');
// para.addEventListener('mouseover',function run(){
//     console.log("Mouse Over")
// });
// para.addEventListener('mouseout',function run()
// {
//     console.log("Mouse Out")
// });
function toggleHide()
{
    let para=document.getElementById('para');
    if(para.style.display!='none')
        para.style.display='none';
    else    
        para.style.display='block'
}


// //setting time in india
// let t=document.getElementbyId('tim');
// function displayTime()
// {
//     time=new Date();
//     console.log(time);
//     document.getElementById('tim').innerHTML=time;
// }
// setInterval(displayTime, 1000);


function display()
{
    tim.innerHTML=new Date();
}
setInterval(display,1000);