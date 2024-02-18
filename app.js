const items = ["BRAND", "Not-Impo-2", "Vel", "Possimus", "Molestiae", "Odit", "Fugit", "Notimp-1", "Fugiat"];
const priorities = [1, 0, 1, 1, 1, 0, 0, 0, 1]; // 1-important/ 0 -not prioritar HW4 when hiding -use priorities

//store indexes of items to be shown in dropdown
let hidden = [];

//2d-array [[item,priority], ...]
let itemsPriorities=[];

//fill 2d-array
for (let i=0; i<items.length; i++){
  itemsPriorities.push([items[i], priorities[i]])
}

const ITOTAL = 9;
const BTN_WIDTH = 50;
let dropOpen = false;
let eWidth = 0;

function adapt() {
  cleanModal();
  for (let numberOfItemShown = ITOTAL; numberOfItemShown >= 1; numberOfItemShown--) {
    estimateWidth(numberOfItemShown);
    if (eWidth <= innerWidth) {
      showItems(numberOfItemShown);
      break;
    }
  }
}

function estimateWidth(numberOfItemShown) {
  let text = "";
  let padding = 0;

  for (let i = 0; i < numberOfItemShown; i++) {
    text += items[i];
    padding += 2 * 10;
  }
  eWidth = 12.5 * text.length + padding + BTN_WIDTH;
}

function showItems(numberOfItemShown) {
  //Reset to initial value
  hidden = [];
  //Added condition to not go out of array
  if (numberOfItemShown > itemsPriorities.length) return;
  navbar.innerHTML = ``;

  if (numberOfItemShown < ITOTAL - 1) {
    for (let i = ITOTAL - 1; i >= numberOfItemShown; i--) {
      let nonPriority = null;
      let isNonPriortiyExists = true;
 // for each index of ItemsPriorities from right to left we try to find
 // first item with priority=0, which not not already stored in hidden[]
      for (let i = ITOTAL - 1; i >= 0; i--) {
        if (itemsPriorities[i][1] === 0 && !hidden.includes(i)) {
          nonPriority = i;
          break;
        } else { // we set the flag that no more items with priority= 0
          isNonPriortiyExists = false;
        }
      }

      if (nonPriority) {
        hidden.push(nonPriority);
      } else if (!isNonPriortiyExists) {
        let lastPriorityIndex = null;
        //when all items with priority= 0 already in hidden[],
        //we find last index of remaining items and store them in hidden[]
        for (i = itemsPriorities.length - 1; i >= 0; i--) {
          if (itemsPriorities[i][1] === 1 && !hidden.includes(i)) {
            lastPriorityIndex = i;
            break;
          }
        }

        hidden.push(lastPriorityIndex);
      }
    }
  }

  for (let i = 0; i < itemsPriorities.length; i++) {
    if (!hidden.includes(i)) { //we exclude items which are in hidden[]
      navbar.innerHTML += `<a class='navbar-item' href="">${itemsPriorities[i][0]}</a>`;
    }
  }

  if (hidden.length) {
    navbar.innerHTML += `<button class="bar" onclick="showRemainingItems()"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></span><span class="quantity">${hidden.length}</span></button>`;
  }
}

function cleanModal() {
  dropOpen = false;
  navBarDrop.innerHTML = ``;
}

function showRemainingItems() {
  //toggle =checkbox principle
  if (dropOpen) {
    cleanModal();
  } else {
    for (let i = 0; i <= itemsPriorities.length; i++) {
      if (hidden.includes(i)) {
        navBarDrop.innerHTML += `<a href="">${items[i]}</a>`;
      }
    }

    dropOpen = true;
  }
}
//HW2*: add more styling
//HW3: fix the bug drop open + resize
