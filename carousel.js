class Slide {
  constructor(url) {
    this.url = url;
  }

  render(rootSelector) {
    let parentDiv = document.querySelector(rootSelector);

    this.slideElement = document.createElement("div");
    this.slideElement.className = "slide";

    for (let y = 1; y <= 12; y++) {
      for (let x = 1; x <= 16; x++) {
        let sq = document.createElement("div");
        sq.className = "sq";
        // разобраться в том как размещаются координаты
        sq.style.top = `${(y - 1) * 50}px`;
        sq.style.left = `${(x - 1) * 50}px`;

        sq.style.backgroundImage = `url(${this.url})`;

        sq.style.backgroundPositionY = `${-(y - 1) * 50}px`;
        sq.style.backgroundPositionX = `${-(x - 1) * 50}px`;

        this.slideElement.appendChild(sq);
      }
    }

    if (parentDiv.firstElementChild) {
      parentDiv.removeChild(parentDiv.firstElementChild);
    }
    parentDiv.appendChild(this.slideElement);
  }

  addEffect() {
    for (let i = 0; i < this.slideElement.children.length; i++) {
      this.slideElement.children[i].style.animation = `fadeOut 1s linear ${i * 0.05}s forwards`;
    }
  }
}

class Carousel {
  constructor(rootSelector, slides) {
    this.rootSelector = rootSelector;

    this.slides = slides;
  }

  render(slideIndex) {
    this.slides[slideIndex].render(this.rootSelector);
  }

  next() {
    this.slides.push(this.slides.shift());
    this.render(0);
  }
}
const slides = [new Slide("image/1-img.jpg"), new Slide("image/2-img.jpg"), new Slide("image/3-img.jpg")];

const carousel = new Carousel(".carousel", slides);

carousel.render(0);
