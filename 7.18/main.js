let a, b;
const elem = document.querySelector('#elem');
let button = document.getElementById('button');
button.addEventListener('click', func);

let concatWidth = elem.offsetWidth;
let concatHeight = elem.offsetHeight;

function func() {
    concatWidth += concatWidth;
    concatHeight += concatHeight;
    elem.style.width = concatWidth + 'px';
    elem.style.height = concatWidth + 'px';
    alert('Widht: ' + concatWidth + '; Height: ' + concatHeight);
    
}