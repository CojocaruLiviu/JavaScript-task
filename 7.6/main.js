function drawBoard(){
  let row = 1;
  for(let i = 1; i <= 64; i++){
    if(row % 2 == 0){
     let color = i % 2 == 0 ? "whiteSquare" : "blackSquare";
    }else{
     let color = i % 2 == 0 ? "blackSquare" : "whiteSquare";
    }
    let square = document.createElement("div");
    square.className = color;
    if (i % 8 == 0){
     square.style = "clear:all";
     row++;
    }
    gameBoardBorder.appendChild(square);
  }
  }