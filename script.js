var clicker1 = document.querySelector('#clicker1');
var backs = document.querySelector('#back');
var next1 = document.querySelector('#next1');
var next2 = document.querySelector('#next2');
var clicker = document.querySelector('#clicker');
var clicker1 = document.querySelector('#clicker1');
var clicker2 = document.querySelector('#clicker2');
var clicker3 = document.querySelector('#clicker3');
var clicker4 = document.querySelector('#clicker4');
var clicker6 = document.querySelector('#clicker6');

clicker4.addEventListener('click', function(){
    backs.style.transform = 'translateX(-100%)';
    next1.style.transform = 'translateX(-100%)';
    clicker4.style.display = 'none'
    clicker5.style.display = 'none'
    clicker6.style.display = 'none'
    clicker3.style.display = 'initial'
})

clicker1.addEventListener('click', function(){
    next1.style.transform = 'translateX(-200%)';
    next2.style.transform = 'translateX(-100%)';
    clicker1.style.display = 'none'
    clicker5.style.display = 'initial'
})
clicker5.addEventListener('click', function(){
    next2.style.transform = 'translateX(100%)';
    next1.style.transform = 'translateX(-100%)';
    clicker5.style.display = 'none'
    clicker1.style.display = 'initial'

})
clicker3.addEventListener('click', function(){
    backs.style.transform = 'translateX(-0%)';
    next1.style.transform = 'translateX(100%)';
    clicker3.style.display = 'none'
    clicker4.style.display = 'initial'
    clicker1.style.display = 'initial'

})
