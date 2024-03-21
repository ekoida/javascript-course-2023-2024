const toggleDropdown = (e) => {
  open = !open;
  if (open) {
    e.target //это свойство События (e) Event, с помощью которого Observer связывает событие click с ".dropdown > a"
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

// с помощью метода querySelector находим прямых потомков(a) у класса dropdown и применям к ним метод addEventListener("определитель события "click" применённого к а и связывающегося с const toggleDropdown и запускающим  функцию с параметром (e)" )
document.querySelector(".dropdown > a").addEventListener("click", toggleDropdown);
