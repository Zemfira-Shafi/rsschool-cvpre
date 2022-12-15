const body = document.querySelector("body");
const burger = document.querySelector(".header-burger");
const nav = document.querySelector(".header-nav");
const list = document.querySelector(".header-list");

function toggleNav() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
}

function closeNav() {
  burger.classList.remove("active");
  nav.classList.remove("active");
  body.classList.remove("active");
}

burger.addEventListener("click", toggleNav);
list.addEventListener("click", closeNav);
