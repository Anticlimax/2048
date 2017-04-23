function initArr() {
  for (var i = 0; i < 4; i++) {
    arr[i] = new Array()
    for (var j = 0; j < 4; j++) {
      arr[i][j] = 0
    }
  }
}

function posCell() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var cell = $('#cell' + i + j)
      cell.css({
        top: getPos('top', i, j) + 'rem',
        left: getPos('left', i, j) + 'rem'
      })
    }
  }
}

function getRandomNumber() {
  if(nospace(arr)){
    return  false
  }
  var randx = Math.floor(Math.random() * 4)
  var randy = Math.floor(Math.random() * 4)

  while (true){
    if(arr[randx][randy] === 0){
      break
    }
    randx = Math.floor(Math.random() * 4)
    randy = Math.floor(Math.random() * 4)
  }
  var randNum = Math.random() > 0.5 ? 2 : 4

  arr[randx][randy] = randNum
  console.log(randNum)
  update()
}

function update() {
  if($('.numberCell')){
    $('.numberCell').remove()
  }
  var $panel = $('#panel')
  for(var i = 0; i < 4; i++){
    for(var j = 0; j < 4; j++){
      $panel.append('<div class="numberCell" id="numberCell'+ i + j +'"></div>')
      var $numberCell = $('#numberCell' + i + j)

      $numberCell.css({
        top:getPos('top', i, j) + 'rem',
        left:getPos('left', i, j) + 'rem'
      })

      if(arr[i][j] === 0){
        $numberCell.html('')
      } else {
        $numberCell.css({
          'background-color':getBackGroundColor(arr[i][j]),
          'color': getNumColor(arr[i][j])
        })
        $numberCell.html(arr[i][j])
      }
    }
  }
}



