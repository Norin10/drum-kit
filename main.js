const keys = Array.from(document.querySelectorAll('.key'));

const keyCode= {
    A: 65,
    S: 83,
    D: 68,
    F: 70,
    G: 71,
};


function playSound(e){
// Figure out the key code
//const code = e.keyCode || keyCode[e.traget.innerHTML]; click doesnt work for some reason 
const code = e.keyCode || e.currentTarget.dataset.key;

//find matching audio
const audio = document.querySelector(`audio[data-key="${code}"]`);
if(!audio) return ;

//Play Sound
audio.currentTime =0;
audio.play();
}

//Keyboard Support
window.addEventListener('keydown' ,playSound);

//Mouse Click Support
keys.forEach(key => key.addEventListener('click',playSound));