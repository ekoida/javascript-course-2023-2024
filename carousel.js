const IMAGES = [
  "img/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
  "img/dave-hoefler-lsoogGC_5dg-unsplash.jpg",
  "img/goutham-krishna-h5wvMCdOV3w-unsplash.jpg",
  "img/sapan-patel-i9Q9bc-WgfE-unsplash.jpg",
];

const TITLES = ["Waterfall", "Sunset", "Morning", "Sunset field"];

let currentIndex = 0;

const EFFECTS = ["animate__zoomIn", "animate__fadeIn", "animate__pulse", "animate__zoomInLeft"];

function showCounterDots() {
  counter_dots.innerHTML = "";
  for (let i = 0; i <= IMAGES.length - 1; i++) {
    if (i === currentIndex) {
      counter_dots.innerHTML += `<div class="counter active"></div>`;
    } else {
      counter_dots.innerHTML += `<div class="counter"></div>`;
    }
  }
}

function showImage(direction) {
  if (direction === "next") {
    currentIndex++;

    if (currentIndex > 3) {
      currentIndex = 0;
    }
  } else if (direction === "prev") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 3;
    }
  }
  showCounterDots();

  let effectIndex = Math.round(Math.random() * (EFFECTS.length - 1));

  carouselTitles.innerHTML = `<h2 class="animate__animated animate__fadeIn">${TITLES[currentIndex].toUpperCase()}</h2>`;

  carouselSlides.innerHTML = `
  <img width=600 height=800 src="${IMAGES[currentIndex]}" class="animate__animated ${EFFECTS[effectIndex]}"/>
  `;
}

function play() {
  setInterval(showImage, 3000, "next");
}

function action() {
  switch (event.code) {
    case "ArrowLeft":
      showImage("prev");
      break;
    case "ArrowRight":
      showImage("next");
      break;
  }
}

showImage(currentIndex);
