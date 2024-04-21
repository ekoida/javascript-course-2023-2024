// async function
const randInt = (cb, maxValue = 10) => {
  //2.
  setTimeout(() => {
    let value = parseInt(Math.random() * maxValue);
    cb(value); // callback of the second function //3. запускается функция animationStart
  }, Math.random() * 3000);
};

const caсhe = {
  steps: 5,
  timer: null,
};

// Animation component
const animationStart = (value) => {
  const container = document.getElementsByClassName("container")[0];
  // HW1 = refactor the code using DOM OOP (create element/set attribute etc)
  const box = document.createElement("div");
  box.classList.add("box");
  box.setAttribute("style", "transform: rotate(0deg)");
  container.append(box)
  //container.innerHTML = `<div class="box" style="transform: rotate(0deg)"></div>`;

  caсhe.timer = setInterval(animationStep.bind(this, caсhe), 500); // в свойство timer записываем идентификатор вызова метода setInterval. Bind позволяет передать параметры в функцию без ее вызова.
};

const animationStep = (caсhe) => {
  const box = document.getElementsByClassName("box")[0];

  let angle = parseFloat(box.style.transform.replace("rotate(", "").replace(")", ""));

  angle += 22.5;

  box.style.transform = `rotate(${angle}deg)`;

  caсhe.steps--;
  if (caсhe.steps <= 0) {
    clearInterval(caсhe.timer);
    animationEnd();
  }
};
const animationEnd = () => {
  const container = document.getElementsByClassName("container")[0];
  container.innerHTML = ``;
};

randInt(animationStart); //1. вызывается функция на 2 стр. с параметром animationStart
