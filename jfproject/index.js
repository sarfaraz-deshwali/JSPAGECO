console.log("welcome to spotify musice")
// initialize the variabals
let songIndex = 0;
let audioElement = new Audio('./sg3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs = [
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg2", filePath:"./sg2.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg3", filePath:"./sg3.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
{ songName:"sg1", filePath:"./sg1.mp3", covePath:"Lighthouse.jpg" },
];

songItems.forEach((element,i)=>{
	element.getElementsByTagName("img")[0].src = songs[i].coverPath;
	element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// handle play push click //
masterPlay.addEventListener('click',()=>{
//console.log	(audioElement.paused)
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
		masterPlay.classList.add('fa-pause-circle');
		gif.style.opacity = 1;
	}
	else{
			audioElement.pause();
		masterPlay.classList.remove('fa-pause-circle');
		masterPlay.classList.add('fa-play-circle');
		gif.style.opacity = 0;
	}
})

// listen to a events
audioElement.addEventListener('timeupdate',()=>{
   // update seekbar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = ()=>{
Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
		element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
})

}
Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		makeAllPlay();
		e.target.classList.remove('fa-play-circle');
		e.target.classList.add('fa-pause-circle');
		audioElement.src = './sg2.mp3';
		audioElement.currentTime = 0;
		audioElement.play();
	})
})





var a = 0;
var id = setInterval(anim,200);
function anim() {
	a= a + 10;
	if(a == 700) {
		clearInterval(id);
	}else{
		var target = document.getElementById("test");
		target.style.marginLeft = a +'px';
	}
}