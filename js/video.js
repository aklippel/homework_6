var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = document.querySelector('#volumeSlider').value + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current Location");
	if (video.currentTime > 32.996875){
		video.currentTime = 0
		console.log(video.currentTime)
	}
	else{
		video.currentTime += 5;
		console.log(video.currentTime)

	}
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate = video.playbackRate * .9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate / .9
	console.log(video.playbackRate)
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume is " + video.volume * 100);
	video.volume = this.value / 100
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%'
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true)	{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
		console.log("Video Unmuted");
	}
	else{
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
		console.log("Video Unmuted")
	}
	vol = document.querySelector('#muted').innerHTML = inner.volume * 100 + "%"
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old");
	video.classlist.add('#oldTime')
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classlist.remove('#oldTime')
});