const N_FLAKES = 20;

let flakes_x = []; //array of flakes coordinates in px
let flakes_y = []; //array of flakes coordinates in px

function genearteCoords() {
  for (let i = 0; i < N_FLAKES; i++) {
    flakes_x[i] = parseInt(Math.random() * 500);
    flakes_y[i] = -parseInt(Math.random() * 500);
  }
}

function drawFlake(i) {
  snowContainer.innerHTML += `<div
   class="flake"
   style="
   left: ${flakes_x[i]}px;
   top: ${flakes_y[i]}px;
   "
   >
   </div>`;
}

function drawAllFlakes() {
  snowContainer.innerHTML = ``;
  for (let i = 0; i < N_FLAKES; i++) {
    drawFlake(i);
  }
}

function fall() {
  for (let i = 0; i < N_FLAKES; i++) {
    flakes_y[i] += 5;
    if (flakes_y[i] > 500) {
      flakes_y[i] = -parseInt(Math.random() * 500);
    }
  }

  drawAllFlakes();
}

genearteCoords();

let fallTimer = setInterval(fall, 20);

let snowFalling = true;

function toggle() {
  if (snowFalling) {
    snowFalling = false;
    clearInterval(fallTimer);
  } else {
    snowFalling = true;
    fallTimer = setInterval(fall, 20);
  }
}
