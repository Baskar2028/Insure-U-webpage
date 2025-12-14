const menuOpenButton = document.getElementById("menuOpen");
const menuCloseButton = document.querySelector("#menuClose");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});
