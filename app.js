const items = ["BRAND", "Commodi", "Vel", "Possimus", "Molestiae", "Odit", "Fugit", "Dignissimos", "Fugiat"];

const ITOTAL =9
const BTN_WIDTH = 50
let eWidth = 0

function adapt( ){
for(let ITOTAL=9; n>=1; n--) {
 estimateWidth(n)
  if (eWidth <= innerWidth) {
    showItems(n)
    break
   }else {

   }
}


}

function estimateWidth( n ) {
  let text = "";
  let padding = 0;
  for (let i = 0; i < n; i++) {
    text += items[i];
    padding += 2 * 10;
  }
  eWidth = 11.5 * text.length + padding + BTN_WIDTH;
  console.log(eWidth);



  // let t2 = items.join(""); // так тоже можно)))
}

function showItems(n /*number of items shown*/) {
  navbar.innerHTML = ``;
  // HW1 - add condition to not go out of array
  for (let i = 0; i < n && n < items.length; i++) {
    navbar.innerHTML += `<a href="">${items[i]}</a>`;
  }
  let remaining = ITOTAL - n
  if (remaining>0){
    navbar.innerHTML += `<button><span>${remaining}</span>=</button>`;
  }
  console.log("remaining" remaining)
}
