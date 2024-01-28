let pac_x = parseInt(1 + Math.random() * 9);
let pac_y = parseInt(1 + Math.random() * 9);

let coin_x = parseInt(1 + Math.random() * 9);
let coin_y = parseInt(1 + Math.random() * 9);

let bomb_x = parseInt(1 + Math.random() * 9);
let bomb_y = parseInt(1 + Math.random() * 9);

let score = 0;

let helthPoints = 100;

function action() {
  switch (event.key) {
    case "ArrowDown":
      if (pac_y >= 10) {
        break;
      }
      pac_y++;
      break;
    case "ArrowUp":
      if (pac_y <= 1) {
        break;
      }
      pac_y--;
      break;
    case "ArrowRight":
      if (pac_x >= 10) {
        break;
      }
      pac_x++;
      break;
    case "ArrowLeft":
      if (pac_x <= 1) {
        break;
      }
      pac_x--;
      break;
  }

  if (pac_x === coin_x && pac_y === coin_y) {
    score += 10;
    coin_x = parseInt(1 + Math.random() * 9);
    coin_y = parseInt(1 + Math.random() * 9);
  }

  if (pac_x === bomb_x && pac_y === bomb_y) {
    helthPoints -= 20;

    bomb_x = parseInt(1 + Math.random() * 9);
    bomb_y = parseInt(1 + Math.random() * 9);
    if (helthPoints < 0) {
      alert("Game Over!!!");
      const willContinue = confirm("Would you like to continue?");
      if (willContinue) {
        helthPoints = 100;
        score = 0;
      }
    }
  }

  renderMap();
}

function renderMap() {
  gameMap.innerHTML = "";
  for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
      if (x === pac_x && y === pac_y) {
        gameMap.innerHTML += `
                <div class="pac"></div>
                `;
      } else if (x === coin_x && y === coin_y) {
        gameMap.innerHTML += `
            <div class="coin"></div>
            `;
      } else if (x === bomb_x && y === bomb_y) {
        gameMap.innerHTML += `
        <div class="bomb"></div>
        `;
      } else {
        gameMap.innerHTML += `
                <div>${x} : ${y}</div>
                `;
      }
    }
  }

  gameScore.innerHTML = `Score: ${score}`;
  helthPointsScore.innerHTML = `Helth points: ${helthPoints}`;
}

renderMap();
