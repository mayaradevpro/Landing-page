const hamburguer = document.querySelector("#hamburguer");
const mobile_menu = document.querySelector("#mobile");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});