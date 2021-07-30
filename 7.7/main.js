
let addres = [
  'http://google.com',
  'directory/page.html',
  'http://ok.ru',
  'http://facebook.com',
  'direct/page.html',
  'http://youtube.com',
  'asistance/page1.html'
  
]

for (let i = 0; i < addres.length; i++) {
  
  for (let j = 0; j < addres[i].length; j++) {
    if (addres[i][0]=='h' && addres[i][1]=='t' && addres[i][2]=='t' && addres[i][3]=='p' ) {
  
      document.getElementById("demo").innerHTML += addres[i++] + '<br>';
      document.getElementById("demo").style.color = 'red';
    } else {
      document.getElementById("demo1").innerHTML += addres[i++] + '<br>';
      }
  }  
}
