const numb = document.getElementById('input').value;
numb = parseInt(numb);
input.onblur = function () {
    
    if (numb < 0) {
        input.classList.add('invalid');
        error.innerHTML = 'Input some clear';
    }
};

input.onfocus = function () {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        error.innerHTML = "";
    }
};
