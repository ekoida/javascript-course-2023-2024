const options = [1000, "Orange", "car", 10, 5, 10000, "Pineapple", "Track", 25, 100, "Watter mellon", "house"];
let prix;
function renderWheel() {
  let html = ``;
  for (let index = 0; index < options.length; index++) {
    let value = options[index];
    let color;
    if (typeof value === "number") {
      color = "orangered";
    } else if (typeof value === "string") {
      color = "darkred";
    } else {
      color = "gray";
      // should use image - isert later
    }

    html += `<li style="transform: rotate(${index * 30}deg); color:${color}">${value}</li>`;
  }
  wheel.innerHTML = html;
}

function showResult() {
  result.innerHTML = `You won a ${prix}`;
}

function rotateWheel() {
  result.innerHTML = "";

  let turns = Math.random() * 10;
  wheel.style = `transform: rotate(-${turns}turn)`;

  let remainder = turns - Math.floor(turns);

  const rqwSector = 11.92 * remainder;
  let sector = Math.round(rqwSector);

  console.log({ turns, remainder, rqwSector, sector });
  if (options[sector] === null) {
    prix = "nothing";
  } else {
    prix = options[sector];
  }

  setTimeout(showResult, 5000);
}

renderWheel();
