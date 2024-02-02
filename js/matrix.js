const canvas = document.getElementById('Matrix');
const ctext = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const alphabet = "111111000010101011000010101111111010101023456789ABCDEF";

const fontSize = 20;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

function draw(){
	ctext.fillStyle = 'rgba(0, 0, 0, 0.05)';
	ctext.fillRect(0, 0, canvas.width, canvas.height);
	
	ctext.fillStyle = '#0F0';
	ctext.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		ctext.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}
};
var name
function startmatrix(){
    var div=document.querySelector(".container_old")
    div.style.display='None'
    div=document.querySelector(".container_loading")
    div.style.display='flex'
    name=setInterval(draw,50)
    setTimeout(readymatrix,4000)
}

function readymatrix(){
    var div=document.querySelector(".loading_text")
    div.style.display='block'
    var btn=document.querySelector(".cybr-btn.matrix")
    btn.style.visibility='visible'
}

function finish(){
    var div=document.querySelector(".container_loading")
    div.classList.toggle('fade-out')
    div=document.querySelector(".container_new")
    div.style.display='block'
    div=document.querySelector(".intro_box")
    div.style.display='block'
    div=document.querySelector("#particles-js")
    div.style.display='block'
    setTimeout(()=>{
        clearfunc()
    },2000)
}

function clearfunc(){
    var div=document.querySelector(".container_loading")
    div.classList.toggle('fade-out')
    div.style.display='None'
    clearInterval(name)
}

document.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const alphabet = "111111000010101011000010101111111010101023456789ABCDEF";
    
    const fontSize = 20;
    const columns = canvas.width/fontSize;
    
    const rainDrops = [];
    
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
})