const gridValues = [
  {
    id: 1,
    value: null
  },
  {
    id: 2,
    value: null
  },
  {
    id: 3,
    value: null
  },
  {
    id: 4,
    value: null
  },
  {
    id: 5,
    value: null
  },
  {
    id: 6,
    value: null
  },
  {
    id: 7,
    value: null
  },
  {
    id: 8,
    value: null
  },
  {
    id: 9,
    value: null
  },
];

var activePlayer = 1;

function updateGridValues(gridValues) {
  document.querySelectorAll(".grid__box").forEach((gridBox) => {
    gridBox.addEventListener('click', () => {setGridValue(gridValues, gridBox.id)})
  })
}

function setGridValue(gridValues, selectedId) {
  gridValues.forEach((element) => {
    if(element.id == selectedId) {
      if(element.value == null) {
        if(activePlayer == 1) {
          element.value = "X";
          activePlayer = 2;
        } else {
          element.value = "O";
          activePlayer = 1;
        }
      }
  }});
  generateGridValuesHTML(gridValues);
}

function generateGridValuesHTML(gridValues) {
  document
    .querySelectorAll(".grid__box")
    .forEach((gridBox, index) => {
      gridBox.innerHTML = gridValues[index].value;
    });
  checkWin(gridValues);
}

function checkWin(gridValues) {
  if(gridValues[0].value == 'X' && gridValues[1].value == 'X' && gridValues[2].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[3].value == 'X' && gridValues[4].value == 'X' && gridValues[5].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[6].value == 'X' && gridValues[7].value == 'X' && gridValues[8].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[0].value == 'X' && gridValues[3].value == 'X' && gridValues[6].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[1].value == 'X' && gridValues[4].value == 'X' && gridValues[7].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[2].value == 'X' && gridValues[5].value == 'X' && gridValues[8].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[0].value == 'X' && gridValues[4].value == 'X' && gridValues[8].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[2].value == 'X' && gridValues[4].value == 'X' && gridValues[6].value == 'X') {
    showWin("Player 1 wins!");
  } else if(gridValues[0].value == 'O' && gridValues[1].value == 'O' && gridValues[2].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[3].value == 'O' && gridValues[4].value == 'O' && gridValues[5].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[6].value == 'O' && gridValues[7].value == 'O' && gridValues[8].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[0].value == 'O' && gridValues[3].value == 'O' && gridValues[6].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[1].value == 'O' && gridValues[4].value == 'O' && gridValues[7].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[2].value == 'O' && gridValues[5].value == 'O' && gridValues[8].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[0].value == 'O' && gridValues[4].value == 'O' && gridValues[8].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[2].value == 'O' && gridValues[4].value == 'O' && gridValues[6].value == 'O') {
    showWin("Player 2 wins!");
  } else if(gridValues[0].value !== null && gridValues[1].value !== null && gridValues[2].value !== null && gridValues[3].value !== null && gridValues[4].value !== null && gridValues[5].value !== null && gridValues[6].value !== null && gridValues[7].value !== null && gridValues[8].value !== null) {
    showWin("It's a tie!");
  }
}

function showWin(message) {
  $win = document.querySelector(".win");
  $win.querySelector('.message').innerHTML = message;
  $win.classList.remove('hidden');
}

updateGridValues(gridValues);