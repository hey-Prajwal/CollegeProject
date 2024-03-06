
const login = document.getElementById("login-btn");
const loginPage = document.querySelector(".login-container");
const signup = document.getElementById("signup-btn");
const signPage = document.querySelector(".signup-container");
const closeButton = document.querySelectorAll(".close-btn");

login.addEventListener("click", () => {
  if (signPage.classList.contains("visible")) {
    signPage.classList.remove("visible");
  }
  loginPage.classList.add("visible");
});

signup.addEventListener("click", () => {
  if (loginPage.classList.contains("visible")) {
    loginPage.classList.remove("visible");
  }
  signPage.classList.add("visible");
});

closeButton.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("login-close")) {
      loginPage.classList.remove("visible");
    } else if (button.classList.contains("sign-close")) {
      signPage.classList.remove("visible");
    }
  });
});















//  ---------------------------------- Hamburger Menu -----------------------------------

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu-item");
const navBtn = document.querySelectorAll(".nav-btn");

toggle.onclick = function(){
  toggle.classList.toggle('active');
  menu.classList.toggle('active');

  if(menu.classList.toggle === "active"){
         navBtn.style.display = "block";
  }
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


