class Validator {
  constructor(value){
    this.value = value;    
  }


isDate(){
  for (let i = 0; i < this.value.length; i++) {
      if (this.value[2] == '.') {
        return 'Date ' + true;
      }
    }
  }

isPhone(){
  /*if (this.value.length > 8  ) {
    return 'Phone ' + true;
  }*/
  for (let i = 0; i < this.value.length; i++) {
    if (this.value[0] == '0' && this.value.length == 9 ) {
      return 'Phone ' + true;
    } 
    
  } 
}  

isEmail(){
  
  for (let i = 0; i < this.value.length; i++) {
   if (this.value[i] == '@') {
      return 'Email ' + true;
    } 
   
  }
}

};
let validat = new Validator('liviu@mail.ru');

console.log(validat.isDate());
console.log(validat.isPhone());
console.log(validat.isEmail());


/* 
for (let i = 0; i < addres.length; i++) {

  for (let j = 0; j < addres[i].length; j++) {
    (addres[i][0] == 'h' && addres[i][1] == 't' && addres[i][2] == 't' && addres[i][3] == 'p') ?

      (document.getElementById("demo").innerHTML += addres[i++] + '<br>') &&
      (document.getElementById("demo").style.color = 'red')
    :
      document.getElementById("demo1").innerHTML += addres[i++] + '<br>';

  
  }
}
*/