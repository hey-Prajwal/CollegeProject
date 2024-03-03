
const login = document.getElementById("login-btn");
const loginPage = document.querySelector(".login-container");
const loginClose = document.querySelector(".login-close");
const signup = document.getElementById("signup-btn");
const signPage = document.querySelector(".signup-container");
const signClose = document.querySelector(".sign-close");

login.addEventListener("click", () => {
  loginPage.classList.add("visible");
});

loginClose.addEventListener("click", () => {
  loginPage.classList.remove("visible");
});

signup.addEventListener("click", () => {
  signPage.classList.add("visible");
});

signClose.addEventListener("click", () => {
  signPage.classList.remove("visible");
});












//  ---------------------------------- Hamburger Menu -----------------------------------

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu-item");

toggle.onclick = function(){
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
}





const menuLink = document.querySelectorAll(".menu-link");


menuLink.forEach(link => {
  link.addEventListener('click', () => {
    // Close the menu when a link is clicked
    toggle.classList.remove('active');
    menu.classList.remove('active');
// Prevent default link behavior
    window.event.preventDefault();
    
    // Scroll to the target section smoothly
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// menuLink.addEventListener('click', ()=>{
//   menu.classList.toggle('active');

// });






//  ---------------------------------- Slider -----------------------------------

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

let tl = gsap.timeline();

tl.from(".logo , .nav-btn , #open-btn", {
  y: -55,
  duration: 0.5,
  stagger: 0.2,
});

tl.from(".main-text , .section-heading", {
  y: -50,
  duration: 0.5,
  opacity: 0,
});


