var arr = [],
  score = 0

$(document).ready(function () {
    newGame()
    $('#btn').on('click', function (e) {
      e.preventDefault()
      console.log(2)
      newGame()
    })
  }
)

function newGame() {
  initPanel()
  getRandomNumber()
  getRandomNumber()
}

function initPanel() {
  initArr()
  posCell()
  update()
}

$(document).on('keydown', function (e) {
  switch (e.keyCode) {
    case 37 : //left
      if (canMoveLeft()) {
        moveLeft()
        getRandomNumber()
        isGameOver()
      }
      break
    case 38: //up
      if (canMoveUp()) {
        moveUp()
        getRandomNumber()
        isGameOver()
      }
      break
    case 39: //right
      if (canMoveRight()) {
        moveRight()
        getRandomNumber()
        isGameOver()
      }
      break
    case 40: //down
      if (canMoveDown()) {
        moveDown()
        getRandomNumber()
        isGameOver()
      }
      break
    default: //default
      break
  }
})
