   const minutes =now.getMinutes; 
   let secondHand =document.getElementById("second-hand");
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);
    const secondsDegree = (seconds/60) *360;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(secondsDegree);
}

const minuteHand =document.getElementById("minute-hand");
function sethour(){
    const minutes = now.getMinutes();

}
setInterval(setDate, 1000);