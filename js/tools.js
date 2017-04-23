


function getPos(str, i, j) {

  if (str === 'top') {
    return 2 + i * 12
  } else {
    return 2 + j * 12
  }
}

function nospace(arr) {
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      if(arr[i][j] === 0){
        return false
      }
    }
  }
  return true
}

function getBackGroundColor(num) {
  switch( num ){
    case 2:return "#eee4da";break;
    case 4:return "#ede0c8";break;
    case 8:return "#f2b179";break;
    case 16:return "#f59563";break;
    case 32:return "#f67c5f";break;
    case 64:return "#f65e3b";break;
    case 128:return "#edcf72";break;
    case 256:return "#edcc61";break;
    case 512:return "#9c0";break;
    case 1024:return "#33b5e5";break;
    case 2048:return "#09c";break;
    case 4096:return "#a6c";break;
    case 8192:return "#93c";break;
  }

  return "black";
}

function getNumColor(num) {
  if( num <= 4 )
    return "#776e65";

  return "white";
}

function noBlockW(row,col1,col2) {
  for(var i = col1+1; i <col2;i++){
    if(arr[row][i] !== 0){
      return false
    }
  }
  return true
}

function noBlockH(col, row1, row2) {
  for(var i = row1 + 1; i < row2; i++){
    if(arr[i][col] !== 0){
      return false
    }
  }
  return true
}

function addScore(num) {
  var per = parseInt($('#score').html())
  $('#score').html(per + num)
}