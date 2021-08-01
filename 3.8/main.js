function checkColor(color, pos) {

  for (let i = 0; i < color.length; i++) {

    if (i == pos) {
    
      pos = color[i];
      return pos;
    
    }
    
  }

  if (pos != ' ') {
    pos = '-1';
    return pos;
  }

}

function Masiv_position() {

  const position = document.getElementById("position").value;

  const colors = ['red', 'green', 'blue'];

  const result = checkColor(colors, position);

  console.log(result);

}
