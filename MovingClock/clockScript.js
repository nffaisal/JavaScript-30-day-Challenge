 function calculateDegree(number){
    return ((number/60)* 360); 
}
 /*for the seconds hand*/
   let secondHand =document.getElementById("second-hand");
   const now = new Date();
function setDate(){
    const seconds = now.getSeconds();
   // console.log(seconds);
    const secondsDegree = 
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
   // console.log(secondsDegree);
}

 /* for the minute hand*/
  const minutes =now.getMinutes; 
  const minuteHand =document.getElementById("minute-hand");
  function setminute(){
    const minutes = now.getMinutes();
    const minutesDegree = calculateDegree(minutes);
    minuteHand.style.transform =`rotate(${minutesDegree})`;

}
setInterval(setminute,100000);

const hourHand =document.getElementById("hour-hand"); 
function sethour(){
     const hours= now.getHours();
     const hours
}
sethour();
