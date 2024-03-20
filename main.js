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
document.querySelector(".dropdown > a").addEventListener("click", toggleDropdown);
