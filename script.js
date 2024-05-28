console.log("welcome to spotify");

//Initialize the index
let songIndex = 0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Salam-e-Ishq", filepath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Ceilo tag", filepath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "I love Ishq", filepath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Dhamall", filepath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "John banega", filepath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Baby Doll", filepath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Maan mera", filepath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Go rockry G0", filepath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "I can do it.", filepath: "songs/9.mp3", coverPath:"covers/9.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
});

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log("Time updated");
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
       
    element.addEventListener('click',(e) =>{
       console.log(e.target);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.remove('fa-pause-circle');
    })

});