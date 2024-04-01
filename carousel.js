class Slide {
  constructor(url) {
    this.url = url;
  }

  render(rootSelector) {
    let parentDiv = document.querySelector(rootSelector);

    let slide = document.createElement("div");
    slide.className = "slide";

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

        slide.appendChild(sq);
      }
    }

    parentDiv.appendChild(slide);
  }
}

const slides = [new Slide("image/1-img.jpg"), new Slide("image/2-img.jpg"), new Slide("image/3-img.jpg")];
slides[0].render(".carousel");
