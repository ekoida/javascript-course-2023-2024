//Rules:
//1.not every ELEMENT interprets EVERY EVENT!

let moldLeft = 230;
let score = 0;
const mold = document.getElementsByClassName("mold")[0];
const egg = document.getElementsByClassName("egg")[0];
const moldWidth = document.querySelector(".mold").clientWidth;
const screenWidth = document.querySelector(".screen").clientWidth;
const begin = 10;
const end = screenWidth - moldWidth - begin;

//HW2: put some limits for mold
const moveMold = (e) => {
  switch (e.code) {
    case "ArrowRight":
      if (moldLeft < end) {
        moldLeft += 5;
      }
      break;
    case "ArrowLeft":
      if (moldLeft > begin) {
        moldLeft -= 5;
      }
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
      setTimeout(() => {
        egg.className = egg.className.replace("fall", "move");
        egg.classList.remove("egg-broken");
      }, 2000);
    }
  }
  if (e.animationName == "fall") {
    egg.classList.add("egg-broken");
  }
};

document.body.addEventListener("keydown", moveMold); //shortcut находит body и слушаетб если происходит событие 'keydown' и применяет const moveMold, внутри которой функция
egg.addEventListener("animationend", animationEnd);

//egg.className.replace('move', 'fall')
