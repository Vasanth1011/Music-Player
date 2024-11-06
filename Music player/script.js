let progress=document.getElementById("progress");
let song=document.getElementById("song");
let ctrlicon=document.getElementById("ctrlicon");
let playpause=document.getElementById("playpause");

song.onloadedmetadata=function(){
  progress.max=song.duration;
  progress.valur=song.currentTime;
}

playpause.addEventListener("click",()=>{
  if(ctrlicon.classList.contains("fa-pause")){
    song.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("fa-play");
  }
  else{
    song.play();
    ctrlicon.classList.remove("fa-play");
    ctrlicon.classList.add("fa-pause");
  }
})

if(song.play()){
  setInterval(()=>{
    progress.value=song.currentTime;
  },500);
}

progress.onchange=function(){
  song.play();
  song.currentTime=progress.value;
  ctrlicon.classList.remove("fa-play");
  ctrlicon.classList.add("fa-pause");
}