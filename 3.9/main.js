function numbersOnly(value) {
 
  (typeof (value) === 'number') :
      return value;
  
}

function Masiv_position(){

  const arrNotNumb = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, 'word', 7, 8, false, 9, 100];
  const numbers = arrNotNumb.filter(numbersOnly);
  
  console.log(numbers);






    
  }
