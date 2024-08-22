const menu = document.querySelector('#menu');
const background = document.querySelector('#background');
const sidenav = document.querySelector('#sidenav');
const closeelem = document.querySelector('#close');

closeelem.addEventListener('click', function (){
    background.style.transform = 'translateX(0Px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidenav.style.left = '-10%';
})

menu.addEventListener('click', function(){
    background.style.transform = 'translateX(200PX) scale(.8) rotateY(-8deg)'; //skewY(10deg)....can add 
    background.style.filter = 'blur(1.8px)';
    sidenav.style.left = '2%';
})