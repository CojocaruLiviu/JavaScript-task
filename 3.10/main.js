 
 function Unique(array){
  var uniqueArray = [];
  
  for(i=0; i < array.length; i++){
      if(uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
      }
  }
  return uniqueArray;
}


function Masiv_sort(){
  
    const values = [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
    const uniqueValues = Unique(values);
    uniquevalues.sort(function(a, b){return a - b});
    console.log(uniqueValues);

  }
