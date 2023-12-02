

console.log("welcome to spotify");
//initialize the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let pause=document.getElementById('pause');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterTitle=document.getElementById('masterTitle');
let songItems=Array.from(document.getElementsByClassName('songItems'));
let timestamp=document.getElementsByClassName('timestamp');

let songs=[
    {songName: "Arabic Kuthu-Beast",filePath:"songs/1.mp3",coverPath:"cover/cover1.jpg"},
    {songName:" 3:59 AM",filePath:"songs/2.mp3",coverPath:"cover/cover2.jpg"},
    {songName: "295",filePath:"songs/3.mp3",coverPath:"cover/cover3.jpg"},
    {songName: "Dhokha",filePath:"songs/4.mp3",coverPath:"cover/cover4.jpg"},
    {songName: "Dil hi to hai",filePath:"songs/5.mp3",coverPath:"cover/cover5.jpg"},
    {songName: "Bandeya Rey Bandeya",filePath:"songs/6.mp3",coverPath:"cover/cover6.jpg"},
    {songName: "Dil Ke Pass",filePath:"songs/7.mp3",coverPath:"cover/cover7.jpg"},
]


songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("font-semibold")[0].innerHTML=songs[i].songName;
});




//audioElement.play()

//Handle play/pause

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterTitle.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity='1';
        
            
        
 }
else

{
    audioElement.pause();
    masterPlay.style.border='none';
   masterPlay.classList.remove('fa-circle-pause');
masterPlay.classList.add('fa-circle-play');
    gif.style.opacity='0';
   
    
}
})



audioElement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    }
)}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        if( audioElement.currentTime<=0)
        {
     songIndex=parseInt(e.target.id);
    audioElement.src= `songs/${songIndex+1}.mp3`;
    masterTitle.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    element.classList.remove('fa-circle-play');
    element.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   gif.style.opacity='1';
        }
    else{
        songIndex=parseInt(e.target.id);
        audioElement.src= `songs/${songIndex+1}.mp3`;
        masterTitle.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.pause();
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
       gif.style.opacity='0';
    }

    })
})
//listen to events
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){ 
        songIndex=0;}
        else{
            songIndex+=1;
        }
        masterTitle.innerText=songs[songIndex].songName;
        audioElement.src= `songs/${songIndex+1}.mp3` ;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity='1';

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){ 
        songIndex=6;}
        else{
            songIndex=-1;
        }
        masterTitle.innerText=songs[songIndex].songName;
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity='1';

})
