const audio = document.getElementById('noise');
const botonPlay = document.getElementById('botonPlay');

botonPlay.addEventListener('click', () => {
    audio.play();
});