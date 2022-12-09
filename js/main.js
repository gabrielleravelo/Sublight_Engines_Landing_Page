var menu =  document.getElementById("navLinks");
var menuItems = document.getElementById("menuItems");
var hamburger = document.getElementById("hamBurger");
// var closeIcon = document.getElementById("iconClose");
var menuIcon = document.getElementById("iconMenu");

function toggleMenu(){
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        // closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        // closeIcon.style.display = "block";
        // menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.addEventListener("click", toggleMenu);

