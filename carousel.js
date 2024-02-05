let currentImageIndex = 2;

function changeImage(direction) {
  if (direction === "right") {
    currentImageIndex++;
    if (currentImageIndex > 3) {
      currentImageIndex = 1;
    }
  } else if (direction === "left") {
    currentImageIndex--;
    if (currentImageIndex < 1) {
      currentImageIndex = 3;
    }
  }
  image.src = `img/${currentImageIndex}.jpg`;
}
