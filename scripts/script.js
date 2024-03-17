const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");

/* Nav Toggler */
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});
