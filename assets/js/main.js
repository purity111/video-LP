const playButton = document.getElementsByClassName('video-play-button')[0];
const myVideo = document.getElementById('FV');

playButton.addEventListener('click', () => {
    myVideo.play(); 
    playButton.style.display = 'none';
});