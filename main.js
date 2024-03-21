const toggleDropdown = (e) => {
  open = !open;
  if (open) {
    e.target
    .nextElementSibling
    .style
    .display = 'block'

  } else {
    e.target
    .nextElementSibling
    .style
    .display = 'none'
  }
};

let open = false;

// с помощью метода querySelector находим прямых потомков(a) у класса dropdown и применям к ним метод addEventListener("определитель события "click" применённого к а и связывающегося с const toggleDropdown и запускающим  функцию с переменной (e)" )
document.querySelector(".dropdown > a").addEventListener("click", toggleDropdown);
