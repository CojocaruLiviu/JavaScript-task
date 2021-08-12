let a,b;
let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

a = getComputedStyle(elem).height;

b = getComputedStyle(elem).width;

function func() {
    alert(a  + ' ' + b );
}
