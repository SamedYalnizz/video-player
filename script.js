const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const video = document.querySelector('video');
const fullscreenBtn = document.querySelector('.fullscreen')

// Play & Pause ----------------------------------- //
function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', "Play");

}
function togglePlay() {
    if(video.paused){
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', "Pause");
    } else {
        video.pause();
        showPlayIcon();
    }
}





// Progress Bar ---------------------------------- //

//Calculate Display Time Format
function displayTime(time){
    const minutes = Math.floor(time/60);
    let seconds = Math.floor(time%60);
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`};


// Update Progress as the video plays

function updateProgress(){
    progressBar.style.width = `${(video.currentTime/video.duration)*100}%`;
    console.log("current Time: ", video.currentTime, "duration: ", video.duration);
    currentTime.textContent = `${displayTime(video.currentTime)} /`;
    duration = `${displayTime(video.duration)}`;
}

// Click to seek within the video
function setProgress(event){
    const newTime = event.offsetX / progressRange.offsetWidth;
    progressBar.style.width = `${newTime*100}%`;
    video.currentTime = newTime * video.duration;
    console.log(newTime);
}



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRange.addEventListener('click', setProgress);

// On Video End, show play button icon
video.addEventListener('ended', showPlayIcon);


