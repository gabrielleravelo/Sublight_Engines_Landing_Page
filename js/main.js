// Show and hide hamburger menu
var menu =  document.getElementById("navLinks");
var menuItems = document.getElementById("menuItems");
var hamburger = document.getElementById("hamBurger");
var menuIcon = document.getElementById("iconMenu");


function toggleMenu(){
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
    }
}
document.addEventListener("click", (e) => {
    if (e.target.id != "iconMenu") {
        menu.classList.remove("showMenu");
    }
});
hamburger.addEventListener("click", toggleMenu);
menuItems.addEventListener("click", toggleMenu);


// EmailJS --- Send email from contact us form
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_contact';
   const templateID = 'template_ctetczo';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Submit';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Submit';
      alert(JSON.stringify(err));
    });
});