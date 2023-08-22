let bulb = document.getElementById('bulb');
let btn =document.getElementById('btn');


function light(){
    bulb.classList.toggle('col');
}
btn.addEventListener('click',light);



let white = document.getElementById('btn2')
white.addEventListener('click',whites);
function whites(){
    bulb.classList.toggle('btn2');
}

let Red = document.querySelector('.rd')
function redColor (){
    bulb.classList.toggle('reds');
    
}
Red.addEventListener('click',redColor);

let All = document.querySelector('.disc');
function AllColors(){
    whites();
    redColor();
    light();
}
All.addEventListener('click',AllColors);