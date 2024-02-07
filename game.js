// LEGEND
// 0 - empty
// 1 - tirex
// 2 - cactux
let gameMap = [0, 2, 0, 0, 1, 0, 2, 0, 2, 0];
let ti = 4;
dir = "left";

function actinon() {
  switch (event.key) {
    case "ArrowLeft":
      // HW1 -finish movement to left
      // HW2 - boundaries - should not go out of the map
      break;
    case "ArrowRight":
      gameMap[ti] = 0;
      ti++;
      gameMap[ti] = 1;
      dir = "right";

      drawMap();
      break;
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
