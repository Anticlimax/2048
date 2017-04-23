var arr = [],
  score = 0

$(document).ready(function () {
    newGame()
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

