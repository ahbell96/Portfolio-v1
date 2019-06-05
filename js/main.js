// getting DOM Items

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

//const getHomePageContent = document.getElementById("#home");

// setting menu
let showMenu = false;

$(document).ready(function() {
  $(".large-heading")
    .delay(300)
    .animate({ opacity: "1" }, 600);

  $(".small-heading")
    .delay(600)
    .animate({ opacity: "1" }, 600);

  $(".icons")
    .delay(1100)
    .animate({ opacity: "1" }, 600);
});

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    // opposite
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}
