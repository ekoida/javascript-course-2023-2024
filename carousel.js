// Exaples: OUL, Slick .... Bootstrap
// 1. Function
// 2. events
// 3. Array, Number, String, ...
// 4. if/else for/while

const IMAGES = [
  // hW 1- what a const
  "img/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
  "img/dave-hoefler-lsoogGC_5dg-unsplash.jpg",
  "img/goutham-krishna-h5wvMCdOV3w-unsplash.jpg",
  "img/sapan-patel-i9Q9bc-WgfE-unsplash.jpg",
];

const TITLES = ["Waterfall", "Sunset", "Morning", "Sunset field"];

//start/current slide
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

  // HW - add title for each image - use 'carouselTitles' div for it
  // isert the h2 tag into 'carouselTitles' to have bigger font size

  let effectIndex = Math.round(Math.random() * (EFFECTS.length - 1));

  carouselTitles.innerHTML = `<h2>${TITLES[currentIndex]}</h2>`;

  carouselSlides.innerHTML = `
  <img width=600 height=800 src="${IMAGES[currentIndex]}" class="animate__animated ${EFFECTS[effectIndex]}"/>
  `;
}

function play() {
  // use timers (setTimeOut or setInterval)
  setInterval(showImage, 3000, "next");
}

showImage(currentIndex);
