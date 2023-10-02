var menuItem = document.querySelectorAll(".item-menu");
function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ative"));
  this.classList.add("ative");
}
menuItem.forEach((item) => item.addEventListener("click", selectLink));
