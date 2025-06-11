let navEl = document.getElementById("navBtn");
let navItems = document.getElementById("navItems");
let navClose = document.getElementById("navClose");

function navFunction() {
  navEl.classList.toggle("active");
  navClose.classList.toggle("active");
  navItems.classList.toggle("active");
}



navEl.addEventListener("click", navFunction);

navClose.addEventListener("click", function () {
  navEl.classList.toggle("active");
  navClose.classList.toggle("active");
  navItems.classList.toggle("active");
});
