//Rules:
//1.not every ELEMENT interprets EVERY EVENT!

let moldLeft = 230;
let score = 0;
const mold = document.getElementsByClassName("mold")[0];
const eggs = document.getElementsByClassName("egg");
const moldWidth = document.querySelector(".mold").clientWidth;
const screenWidth = document.querySelector(".screen").clientWidth;
const begin = 10;
const end = screenWidth - moldWidth - begin;
const scoreDiv = document.getElementsByClassName("score")[0];
let duration = 5;

//GOLDEN!!
//HTML Collection -No forEach()
//NODE list  - YES forEach()
const eggElements = [...eggs];

const randomStart = () => {
  let startEgg = parseInt(Math.random() * 10);
  if (startEgg < 5) {
    eggElements[0].classList.add("move");
  } else {
    eggElements[1].classList.add("move");
  }
};

randomStart();
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
  let egg = e.target;

  if (e.animationName == "move") {
    if (
      (180 <= moldLeft &&
        moldLeft <= 200 &&
        // egg.classList.contains('left')
        egg.className.includes("left")) ||
      (250 <= moldLeft &&
        moldLeft <= 270 &&
        //egg.classList.contains('right')
        egg.className.includes("right"))
    ) {
      score++;
      egg.classList.remove("move");
      setTimeout(() => {
        randomStart()
       // egg.classList.add("move");
      }, 10);
      duration--;
      if (duration <= 0) {
        duration = 0.8;
      }

      egg.style.setProperty("animation-duration", `${duration}s`);
    } else {
      score--;
      //HW3: do the same with className
      // egg.classList.remove("move");
      // egg.classList.add("fall");
      egg.className = egg.className.replace("move", "fall");
      egg.style.removeProperty("animation-duration");

      setTimeout(() => {
        egg.className = egg.className.replace("fall", "move");
        egg.classList.remove("egg-broken");
      }, 2000);
    }
  }
  if (e.animationName == "fall") {
    egg.classList.add("egg-broken");
  }
  scoreDiv.innerHTML = `score: ${score}`;
};

document.body.addEventListener("keydown", moveMold); //shortcut находит body и слушаетб если происходит событие 'keydown' и применяет const moveMold, внутри которой функция

eggElements.forEach((egg) => {
  egg.addEventListener("animationend", animationEnd);
});

//egg.className.replace('move', 'fall')
