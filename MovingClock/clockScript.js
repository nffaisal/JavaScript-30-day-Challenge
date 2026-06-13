 function calculateDeg(number){
    return ((number/60)* 360); 
}
 /*for the seconds hand*/
   const secondHand =document.getElementById("second-hand");
function setSeconds(){
     const now = new Date();
    const seconds = now.getSeconds();
   // console.log(seconds);
    const secondsDegree = calculateDeg(seconds);
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
   // console.log(secondsDegree);
}
  setInterval(setSeconds, 1000);
 /* for the minute hand*/
  const minuteHand =document.getElementById("minute-hand");
function setminute(){
     const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegree = calculateDeg(minutes);
    minuteHand.style.transform =`rotate(${minutesDegree}deg)`;

}
setInterval(setminute ,1000);

const hourHand =document.getElementById("hour-hand"); 
function sethour(){
     const now = new Date();
     const hours= (now.getHours()) * 30 + (now.getMinutes() *0.5); //formula to calculate degree of the hours hand
     hourHand.style.transform =`rotate(${hours}deg)`;
}
setInterval(sethour , 1000);
