const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");

/* Nav Toggler */
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

let currentAnimation = 1;
//  Services Tab and Content Animations
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    tabContents.forEach((content) => content.classList.remove("active"));
    tabContents[index].classList.add("active");

    if (window.innerWidth >= 1024) {
      switch (currentAnimation) {
        case 1:
          tabContents[index].style.animationName = "fadeInRight";
          break;
        case 2:
          tabContents[index].style.animationName = "fadeInLeft";
          break;
        case 3:
          tabContents[index].style.animationName = "scaleIn";
          break;
        case 4:
          tabContents[index].style.animationName = "scaleOut";
          break;
      }
    } else {
      tabContents[index].style.animationName = "fadeInRight";
    }
    currentAnimation = currentAnimation < 4 ? currentAnimation + 1 : 1;
  });
});
