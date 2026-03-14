// Add [0] to get the actual element
const container = document.getElementsByClassName('container')[0]; 
const audios = document.getElementById('audios')
const myAudio = document.getElementById('myAudio')
const playBtn = document.getElementById('playBtn')
const cTime = document.getElementById('cTime')
const mLength = document.getElementById('mLength')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const thumbnail = document.getElementById('thumbnail')
const adjustRange = document.getElementById('adjustRange')
const description = document.getElementById('description')
const songCount = document.getElementById('songCount')


const emojis = ['😊', '❤', '😉', '🌹', '✨'];

let audioIndex = 0

const intervalId = setInterval(() => {
    for(let i = 0; i < 10; i++){
        let rand1 = Math.floor(Math.random() * emojis.length);
        
        const div = document.createElement('div');
        div.textContent = emojis[rand1];
        div.style.position = "absolute";
        div.style.top = `${Math.random() * 100}vh`;
        div.style.left = `${Math.random() * 100}%`;
        div.style.zIndex = '-1'
        div.style.opacity = '.4'
        
        if(container) container.appendChild(div);

        setTimeout(() => {
            container.removeChild(div)
        }, 2000);
    }
}, 500);

prevBtn.addEventListener('click', () => {
    if(audioIndex === 0){
        audioIndex = audios.files.length -1
    }else{
        audioIndex -= 1;
    }
    loadMusic(audioIndex)
    myAudio.play()
    thumbnail.style.animation = "animate 5s linear infinite"
})

nextBtn.addEventListener('click', () => {
    if(audioIndex === audios.files.length - 1){
        audioIndex = 0
    }else{
        audioIndex += 1
    }
    loadMusic(audioIndex)
    myAudio.play()
    thumbnail.style.animation = "animate 5s linear infinite"
})

playBtn.addEventListener('click', async (e) => {
    const icon = e.currentTarget.querySelector('i');

    if (myAudio.paused) {
        try {
            await myAudio.play();
            icon.className = 'fa fa-pause';
            thumbnail.style.animation = "animate 5s linear infinite"
        } catch (err) {
            console.log('Play interrupted:', err);
            thumbnail.style.animation = "none"
        }
    } else {
        myAudio.pause();
        icon.className = 'fa fa-play';
        thumbnail.style.animation = "none"
    }
});

function loadMusic(index){
    const file = audios.files[index];
    if(file){
        const fileURl = URL.createObjectURL(file)
        myAudio.src = fileURl;
        description.textContent = file.name;
    }
}
audios.addEventListener('input', (e) => {
    audioIndex = 0;
    loadMusic(audioIndex);
    songCount.textContent = audios.files.length + " Audios"
});

myAudio.addEventListener('timeupdate', () => {
    const ct = myAudio.currentTime;
    const al = myAudio.duration;

    const minutes = Math.floor(ct / 60);
    const seconds = Math.floor(ct % 60);

    const am = Math.floor(al / 60);
    const as = Math.floor(al % 60);

    cTime.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`
    mLength.textContent = `${am.toString().padStart(2, "0")} : ${as.toString().padStart(2, "0")}`
    
    adjustRange.value = Math.floor((myAudio.currentTime / myAudio.duration) *100) ;
});

adjustRange.addEventListener("input", (e) => {
  myAudio.currentTime = Math.floor((e.target.value / 100) * myAudio.duration)
})