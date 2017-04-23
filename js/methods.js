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
  if (nospace(arr)) {
    return false
  }
  var randx = Math.floor(Math.random() * 4)
  var randy = Math.floor(Math.random() * 4)

  while (true) {
    if (arr[randx][randy] === 0) {
      break
    }
    randx = Math.floor(Math.random() * 4)
    randy = Math.floor(Math.random() * 4)
  }
  var randNum = Math.random() > 0.5 ? 2 : 4

  arr[randx][randy] = randNum
  update()
}

function update() {
  if ($('.numberCell')) {
    $('.numberCell').remove()
  }
  var $panel = $('#panel')
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      $panel.append('<div class="numberCell" id="numberCell' + i + j + '"></div>')
      var $numberCell = $('#numberCell' + i + j)

      $numberCell.css({
        top: getPos('top', i, j) + 'rem',
        left: getPos('left', i, j) + 'rem'
      })

      if (arr[i][j] === 0) {
        $numberCell.html('')
      } else {
        $numberCell.css({
          'background-color': getBackGroundColor(arr[i][j]),
          'color': getNumColor(arr[i][j])
        })
        $numberCell.html(arr[i][j])
      }
    }
  }
}

function canMoveLeft() {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (arr[i][j] !== 0) {
        if (arr[i][j - 1] === 0 || arr[i][j] === arr[i][j - 1]) {
          return true
        }
      }
    }
  }
  return false
}

function canMoveRight() {
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if (arr[i][j] !== 0) {
        if (arr[i][j + 1] === 0 || arr[i][j] === arr[i][j + 1]) {
          return true
        }
      }
    }
  }
  return false
}

function canMoveUp() {
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (arr[i][j] !== 0) {
        if (arr[i - 1][j] === 0 || arr[i][j] === arr[i - 1][j]) {
          return true
        }
      }
    }
  }
  return false
}

function canMoveDown() {
  for (var i = 2; i >= 0; i--) {
    for (var j = 0; j < 4; j++) {
      if (arr[i][j] !== 0) {
        if (arr[i + 1][j] === 0 || arr[i][j] === arr[i + 1][j]) {
          return true
        }
      }
    }
  }
  return false
}

function moveLeft() {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (arr[i][j] !== 0) {

        for (var k = 0; k < j; k++) {
          if (arr[i][k] === 0 && noBlockH(i, k, j)) {
            arr[i][k] = arr[i][j]
            arr[i][j] = 0
          } else if (arr[i][j] === arr[i][k] && noBlockH(i, k, j)) {
            addScore(arr[i][j])
            arr[i][k] *= 2
            arr[i][j] = 0
          }
        }
      }
    }
  }
  update()
}

function moveRight() {
  for (var i = 0; i < 4; i++) {
    for (var j = 2; j >= 0; j--) {
      if(arr[i][j] !== 0){
        for(var k = 3; k > j; k--){
          if(arr[i][k] === 0 && noBlockH(i, j, k)){
            arr[i][k] = arr[i][j]
            arr[i][j] = 0
          } else if(arr[i][k] === arr[i][j] && noBlockW(i, j, k)){
            addScore(arr[i][j])
            arr[i][k] *= 2
            arr[i][j] = 0
          }
        }
      }
    }
  }
  update()
}

function moveUp() {
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if(arr[i][j] !== 0){
        for(var k = 0; k < i; k++){
          if(arr[k][j] === 0 && noBlockH(j,k,i)){
            arr[k][j] = arr[i][j]
            arr[i][j] = 0
          }else if(arr[k][j] === arr[i][j] && noBlockH(j,k,i)){
            addScore(arr[i][j])
            arr[k][j] *= 2
            arr[i][j] = 0
          }
        }
      }
    }
  }
  update()
}

function moveDown() {
  for (var i = 2; i >= 0; i--) {
    for (var j = 0; j < 4; j++) {
      if(arr[i][j] !== 0){
        for(var k = 3; k > i; k--){
          if(arr[k][j] === 0 && noBlockH(j,i,k)){
            arr[k][j] = arr[i][j]
            arr[i][j] = 0
          } else if(arr[k][j] === arr[i][j] && noBlockH(j,i,k)){
            addScore(arr[i][j])
            arr[k][j] *= 2
            arr[i][j] = 0
          }
        }
      }
    }
  }
  update()
}

function isGameOver() {
  if(!canMoveRight() && !canMoveLeft() && !canMoveUp() && !canMoveDown()){
    alert('Game Over')
  }
}