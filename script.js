const Allbtn = document.querySelectorAll(".sound-btn")

let audio = new Audio("sound/tadaa.mp3")
Allbtn.forEach((e)=>{
console.log(e);
e.addEventListener("click",()=>{
    audio.play()
})
})

