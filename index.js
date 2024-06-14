
      
      
const start=document.querySelector("#startbtn")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#resetbtn");
const gettime=document.querySelector("#gettime");
const show=document.querySelector(".resetvalue");








let hour =0; 
let minute =0; 
let second =0; 
let count =0; 
let cnts=0;

gettime.addEventListener("click", function(){
const hr1= document.getElementById('hr').innerText;
const min1= document.getElementById('min').innerText;
const secon1=  document.getElementById('seconds').innerText;
const cnt1=  document.getElementById('count').innerText;



let newpara=document.createElement("div");
cnts+=1;


let cntstring=cnts;
if(cnts<10){
cntstring="0"+cnts;

}


newpara.innerHTML=`<div class="No">${cntstring}</div><div> ${hr1}:${min1}:${secon1}:${cnt1}</div>
`;

show.append(newpara);



})

start.addEventListener("click",function(){
    ready=true;
    console.log("Hello");
    stopwatch();
})
stop.addEventListener("click",function (){
    ready=false;
   
})
reset.addEventListener("click",function(){
    ready=false;
    hour=0;
    hour = 0; 
  minute = 0; 
  second = 0; 
  count = 0;
  show.innerHTML="";
 
})


function stopwatch(){
if(ready){
count++;

}

if(count==100){
second++;


count=0;
}
if(second==60){
minute++;
second=0;
}
if(minute==60){
hour++;
minute=0;
}
if(hour==12){
hour=0;
}
let hrstring=hour;
let minstring=minute
let secondstring=second;

let countstring=count;
if(hour<10){
hrstring="0"+hrstring;
}
if(minute<10){
minstring="0"+minstring;
}
if(second<10){
secondstring="0"+secondstring;
}
if(count<10){
countstring="0"+countstring;
}
document.getElementById('hr').innerText=hrstring;
document.getElementById('min').innerText=minstring;
document.getElementById('seconds').innerText=secondstring;
document.getElementById('count').innerText=countstring;
setTimeout(stopwatch);
}











