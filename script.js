// TEXTO DINÁMICO
const subtitles = [
"Inicializando sistema...",
"Detectando usuario...",
"Leyendo patrones...",
"Sincronizando...",
"Acceso parcial...",
"El sistema te observa..."
];

let i = 0;
setInterval(()=>{
document.getElementById("subtitle").textContent = subtitles[i];
i=(i+1)%subtitles.length;
},2500);


// BOTÓN
const enterBtn = document.getElementById("enterBtn");

enterBtn.onclick = ()=>{
document.body.classList.add("flash");
setTimeout(()=>document.body.classList.remove("flash"),100);
fakeAccessSequence();
};


// SECUENCIA DE ACCESO
function fakeAccessSequence(){
const overlay=document.createElement("div");

overlay.style=`
position:fixed;
top:0;left:0;
width:100%;height:100%;
background:black;
color:lime;
font-family:monospace;
padding:20px;
z-index:9999;
`;

document.body.appendChild(overlay);

const lines=[
"> iniciando acceso...",
"> verificando identidad...",
"> ERROR: SUJETO CONSCIENTE",
"> reintentando...",
"> acceso concedido",
"> cargando sistema..."
];

let x=0;
const interval=setInterval(()=>{
overlay.innerHTML+=lines[x]+"<br>";
x++;

if(x>=lines.length){
clearInterval(interval);
setTimeout(()=>overlay.remove(),1500);
}
},700);
}


// AUDIO
document.body.addEventListener("click",()=>{
const s=document.getElementById("bgSound");
if(s.paused) s.play();
});


// GLITCH BOTÓN
setInterval(()=>{
enterBtn.style.transform=
`translate(${Math.random()*4-2}px,${Math.random()*4-2}px)`;
},200);


// CORRUPCIÓN
setInterval(()=>{
const r=Math.random();

if(r<0.2){
document.body.classList.add("flash");
setTimeout(()=>document.body.classList.remove("flash"),100);
}

if(r<0.15){
document.body.classList.add("distort");
setTimeout(()=>document.body.classList.remove("distort"),200);
}

if(r<0.1) corruptText();
if(r<0.05) criticalError();

},3000);


// TEXTO CORRUPTO
function corruptText(){
const chars="!@#$%^&*()";
const title=document.querySelector(".glitch");

let t="";
for(let i=0;i<title.textContent.length;i++){
t+=Math.random()<0.3
? chars[Math.floor(Math.random()*chars.length)]
: title.textContent[i];
}

title.textContent=t;

setTimeout(()=>title.textContent="PULSE FORGE",500);
}


// ERROR CRÍTICO
function criticalError(){
const o=document.createElement("div");

o.style=`
position:fixed;
top:0;left:0;
width:100%;height:100%;
background:black;
color:red;
display:flex;
justify-content:center;
align-items:center;
font-size:2rem;
z-index:99999;
`;

o.innerHTML="ERROR: SUJETO CONSCIENTE";

document.body.appendChild(o);

setTimeout(()=>o.remove(),1500);
}