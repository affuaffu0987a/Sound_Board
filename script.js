const gaspbtn = document.querySelector(".btn1")


let audio = new Audio("sound/gasp.mp3")
gaspbtn.addEventListener("click",()=>{
    audio.play()
})