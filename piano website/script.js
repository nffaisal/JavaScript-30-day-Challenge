
 const audioMap ={};
 document.querySelectorAll(`audio[data-key]`).forEach(
    audio => {
        const key = audio.getAttribute("data-key");
        audioMap[key] = audio;
    }
 )
 window.addEventListener( 'keydown', function(e){
    const audio = audioMap[e.code];
    const pianoKey = this.document.querySelector(`[data-key="${e.code}"]`);
    if(!audio){ return;} //if no audio element matches the function
    audio.currentTime =0;
    audio.play();
    pianoKey.classList.add("playing");
}
 )
 window.addEventListener( 'keyup', function(e) {
   const pianoKey = this.document.querySelector(`[data-key="${e.code}"]`);  
  pianoKey.classList.remove("playing");

 })
 