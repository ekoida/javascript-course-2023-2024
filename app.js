const items = ["BRAND", "Commodi", "Vel", "Possimus", "Molestiae", "Odit", "Fugit", "Dignissimos", "Fugiat"];
const priorities = [1, 0, 1, 0, 1, 0, 0, 0, 1]; // 1-important/ 0 -not prioritar HW4 when hiding -use priorities
const hidden = [];

const itemsPriorities = items.map((item, index) => {
  return [item, priorities[index]];
});

const ITOTAL = 9;
const BTN_WIDTH = 50;
let dropOpen = false;
let eWidth = 0;

function adapt() {
  cleanModal();
  for (let n = ITOTAL; n >= 1; n--) {
    estimateWidth(n);
    if (eWidth <= innerWidth) {
      showItems(n);
      break;
    }
  }
}

function estimateWidth(n) {
  let text = "";
  let padding = 0;
  const navItems = navbar.querySelectorAll("a");
  for (i = 0; i < navItems.length; i++) {
    console.log(navItems[i].clientWidth);
  }

  for (let i = 0; i < n; i++) {
    text += items[i];
    padding += 2 * 10;
  }
  eWidth = 11.5 * text.length + padding + BTN_WIDTH;
  // console.log(eWidth);

  // let t2 = items.join(""); // так тоже можно)))
}

function showItems(n /*number of items shown*/) {
  // HW1 - add condition to not go out of array
  if (n > itemsPriorities.length) return;
  navbar.innerHTML = ``;

  for (let i = 0; i < n; i++) {
    navbar.innerHTML += `<a class='navbar-item' href="">${items[i]}</a>`;
  }
  let remaining = ITOTAL - n;
  if (remaining > 0) {
    navbar.innerHTML += `<button onclick="showRemainingItems(${remaining})"><span>${remaining}</span>=</button>`;
  }
}

function cleanModal() {
  dropOpen = false;
  navBarDrop.innerHTML = ``;
}

function showRemainingItems(n /*number of items shown*/) {
  //toggle =checkbox principle
  if (dropOpen) {
    cleanModal();
  } else {
    for (let i = ITOTAL - n; i < ITOTAL && n < items.length; i++) {
      navBarDrop.innerHTML += `<a href="">${items[i]}</a>`;
    }

    dropOpen = true;
  }
}
//HW2*: add more styling
//HW3: fix the bug drop open + resize
