function Studenti() {
  let nota = [], name = [], nrnot, valmax, valmin, med = 0, max = 0, min = 10;
  let resultstud = '';
  window.sortare = [];
  window.nrst;
  window.info = [];
  window.total = '';
  let medneg = '';
  nrst = prompt('Introdu nr de studenti: ', '');
  nrst = parseInt(nrst, 10);
  med = parseInt(med, 10);
  max = parseInt(max, 10);
  min = parseInt(min, 10);


  for (let i = 0; i < nrst; i++) {
    name = prompt('Introduceti nume student ' + i, '');
    info[i] = name;
    nrnot = prompt('Introdu nr de note pentru: ' + name, '');
    nrnot = parseInt(nrnot, 10);
    resultstud += ' ' + name + ': ';
    med = 0;
    for (let j = 0; j < nrnot; j++) {
      nota[j] = prompt('Introduceti nota ' + j, '');
      nota[j] = parseInt(nota[j], 10);
      resultstud += ' ' + nota[j];
      med += nota[j];
      sortare[j] = nota[j];
    }
    //Students with negative media
    med = med / nrnot;

    (med < 5) ?
      medneg += name + ' cu media ' + med + '; <br>' : "";

    //Student with max med	
    (med > max) ?  
      
    (max = med) ? (valmax = name + ' cu media ' + med + '; <br>') : "";

    //Student min med
     (med < min) ? 
      (min = med) &&
      (valmin = name + ' cu media ' + med + '; <br>') : "" ;


    //Studentii dupa medie descrescator 


    resultstud += ', cu media ' + med + ';<br>';

  }




  document.getElementById("stud").innerHTML = ("Studentii introdusi sunt:<br>" + resultstud);
  document.getElementById("neg").innerHTML = ("Studentii cu media negativa:<br>" + medneg);
  document.getElementById("minmax").innerHTML = ("Studentul cu media minima:<br>" + valmin + "Studentul cu media maxima: <br> " + valmax);


}

function myFunction() {
  let resultname = [];
  let resultnote = [];

  for (let i = 0; i < nrst; i++) {

    resultname[i] = info[i];
    total += ' ' + resultname[i] + ':';

    for (let j = 0; j < sortare.length; j++) {
      resultnote[j] = sortare[j];

      resultnote.sort(function (a, b) { return a - b });
      total += resultnote[j++] + ' ';
      //Nu am reusit sa afisezi la fiecare notele sortate 

    }
  }



  document.getElementById("desc").innerHTML = ("Studentii sortati:<br>" + total);

}