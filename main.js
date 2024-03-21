//Rules:
//1.not every ELEMENT interprets EVERY EVENT!

let moldLeft = 225;
let score = 0;
const mold = document.getElementsByClassName("mold")[0];
const egg = document.getElementsByClassName("egg")[0];

//HW2: put some limits for mold
const moveMold = (e) => {
  switch (e.code) {
    case "ArrowRight":
      moldLeft += 5;
      break;
    case "ArrowLeft":
      moldLeft -= 5;
      break;
  }
  mold.style.left = `${moldLeft}px`;
};

const animationEnd = (e) => {
  if (e.animationName == "move") {
    if (125 <= moldLeft && moldLeft <= 150) {
      score++;
      egg.classList.remove("move");
      setTimeout(() => {
        egg.classList.add("move");
      }, 10);
    } else {
      score--;
      //HW3: do the same with className
      // egg.classList.remove("move");
      // egg.classList.add("fall");
      egg.className = egg.className.replace("move", "fall");
    }
  }
  if (e.animationName == "fall") {
    egg.classList.add("egg-broken");
  }
};

document.body.addEventListener("keydown", moveMold); //shortcut находит body и слушаетб если происходит событие 'keydown' и применяет const moveMold, внутри которой функция
egg.addEventListener("animationend", animationEnd);

//egg.className.replace('move', 'fall')
