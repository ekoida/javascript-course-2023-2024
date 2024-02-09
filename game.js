// LEGEND
// 0 - empty
// 1 - tirex
// 2 - cactux
let initialMap = [0, 2, 0, 0, 1, 0, 2, 0, 2, 0];
let gameMap = [0, 2, 0, 0, 1, 0, 2, 0, 2, 0];
let ti = 4;
dir = "left";

function actinon() {
  switch (event.key) {
    case "ArrowLeft":
      if (ti === 0) {
        dir = "right";
        drawMap();
        break;
      }
      gameMap[ti] = 0;
      ti--;
      gameMap[ti] = 1;
      dir = "left";
      drawMap();
      newGame();
      break;
    case "ArrowRight":
      if (ti === gameMap.length - 1) {
        dir = "left";
        drawMap();
        break;
      }
      gameMap[ti] = 0;
      ti++;
      gameMap[ti] = 1;
      dir = "right";

      drawMap();
      newGame();
      break;
  }
}

function startNewGame() {
  gameMap = initialMap;
  ti = 4;

  drawMap();
}

function newGame() {
  if (!gameMap.includes(2)) {
    info.innerHTML = `Game over!
    Do you want to continue? <button onclick=startNewGame()>Continue</button>`;
  }
}

function drawMap() {
  m.innerHTML = "";
  for (let i = 0; i < gameMap.length; i++) {
    if (gameMap[i] === 0) {
      m.innerHTML += `<div></div>`;
    } else if (gameMap[i] === 1) {
      m.innerHTML += `<div class='t-rex ${dir}'></div>`;
    } else if (gameMap[i] === 2) {
      m.innerHTML += `<div class='cactus'></div>`;
    }
  }
}

drawMap();
