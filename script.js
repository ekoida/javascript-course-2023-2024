// async function
const randInt = (cb, maxValue = 10) => {
  setTimeout(() => {
    let value = parseInt(Math.random() * maxValue);
    print(value);
    cb(value); // callback of the second function
  }, Math.random() * 3000);
};

const cashe = {
  steps: 5,
  timer: null,
};

// Animation component
const animationStart = (value) => {
  const container = document.getElementsByClassName("container")[0];
  // HW1 = refactor the code using DOM OOP (create element/set attribute etc)
  container.innerHTML = `<div class="box" style="transform: rotate(0deg)"></div>`;

  Cache.timer = setInterval(animationStep.bind(this, cashe), 500);
};

const animationStep = (cashe) => {
  cashe.steps = value;
  const box = document.getElementsByClassName("box")[0];

  const angle = parseFloat(box.style.transform.replace("rotate(", "").replace(")", ""));

  angle += 22.5;

  box.style.transform = `rotate(${angle}deg)`;

  cashe.steps--;
  if (cashe.steps === 0) { 
    clearInterval(cashe.timer);
    animationEnd();
  }
};
const animationEnd = () => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = ``;
};

randInt(animationStart);
