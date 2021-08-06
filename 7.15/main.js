
function check(){
    let val = document.getElementById('valueNumb').value;
    if (typeof (val) === 'number') {
        return val;
    } else document.getElementById('valueNumb').value = '';

}