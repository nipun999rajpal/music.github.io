console.log("Welcome to Spotify");

// Initialize the Variables
let songindex = 0;
let audioElement = new Audio('/song/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName("songitem"));

let song = [
    { songName: "Moonlight", filePath: "./song/1.mp3", coverPath: "./covers/1.jfif" },
    { songName: "Waalian", filePath: "./song/2.mp3", coverPath: "./covers/2.jfif" },
    { songName: "Khaab", filePath: "./song/3.mp3", coverPath: "./covers/3.jfif" },
    { songName: "Whatever it takes", filePath: "./song/4.mp3", coverPath: "./covers/4.jfif" },
    { songName: "demons", filePath: "./song/5.mp3", coverPath: "./covers/5.jfif" },
    { songName: "believer", filePath: "./song/6.mp3", coverPath: "./covers/6.jfif" },
    { songName: "Adhiya", filePath: "./song/7.mp3", coverPath: "./covers/7.jfif" },
    { songName: "Legend", filePath: "./song/8.mp3", coverPath: "./covers/8.jfif" },
    { songName: "Kheriyat", filePath: "./song/9.mp3", coverPath: "./covers/9.jfif" },
    { songName: "Old skool", filePath: "./song/10.mp3", coverPath: "./covers/10.jfif" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML = song[i].songName;
})


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/song/${songindex+1}.mp3`;
        mastersongname.innerText = song[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `/song/${songindex+1}.mp3`;
    mastersongname.innerText = song[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `/song/${songindex}.mp3`;
    mastersongname.innerText = song[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})