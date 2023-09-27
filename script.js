
const sounds=[
    {
        id:0,
        SoundURL:"sound/gasp.mp3"
    },
    {
        id:1,
        SoundURL:"sound/tadaa.mp3"
    },
    {
        id:2,
        SoundURL:"sound/victory.mp3"
    },
    {
        id:3,
        SoundURL:"sound/wrong-answer.mp3"
    },
    {
        id:4,
        SoundURL:"sound/crowdcheer.mp3"
    },{
        id:5,
        SoundURL:"sound/boo.mp3"
    }
]

const Allbtn = document.querySelectorAll(".sound-btn");


Allbtn.forEach((e)=>{
e.addEventListener("click",(elm)=>{
    sounds.forEach((sound)=>{
       if(elm.target.id == sound.id){
        let audio = new Audio(sound.SoundURL)
        audio.play()
       }
    })
})
})

