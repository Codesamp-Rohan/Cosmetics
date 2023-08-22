const loader = document.querySelector(".loader");

window.addEventListener("load", function () {
  loader.classList.add("hidden");
});

const dropbtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", function () {
  dropContent.classList.toggle("hidden");
});

const contactUs = document.querySelector(".contactUs");
const closeWindow = document.querySelector(".close");
const openWindow = document.querySelector(".contactBtn");
const overlay = document.querySelector(".overlay");

openWindow.addEventListener("click", function () {
  contactUs.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeWindow.addEventListener("click", function () {
  contactUs.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  contactUs.classList.add("hidden");
  overlay.classList.add("hidden");
});

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");

const para1 = document.querySelector("#optionPara1");
const para2 = document.querySelector("#optionPara2");
const para3 = document.querySelector("#optionPara3");

const leftProduct = document.querySelector(".leftProduct");

const productImage1 = document.querySelector("#productImage1");
const productImage2 = document.querySelector("#productImage2");
const productImage3 = document.querySelector("#productImage3");

option1.addEventListener("click", function () {
  productImage1.classList.remove("hidden");
  productImage2.classList.add("hidden");
  productImage3.classList.add("hidden");
  para1.style.fontWeight = "600";
  para2.style.fontWeight = "100";
  para3.style.fontWeight = "100";
});
option2.addEventListener("click", function () {
  productImage2.classList.remove("hidden");
  productImage1.classList.add("hidden");
  productImage3.classList.add("hidden");
  para2.style.fontWeight = "600";
  para1.style.fontWeight = "100";
  para3.style.fontWeight = "100";
});
option3.addEventListener("click", function () {
  productImage3.classList.remove("hidden");
  productImage1.classList.add("hidden");
  productImage2.classList.add("hidden");
  para3.style.fontWeight = "600";
  para1.style.fontWeight = "100";
  para2.style.fontWeight = "100";
});

// // SWIPER
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Mobile Navbar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s `;
      }
    });
    burger.classList.toggle("toggle");
  });
  //
};

navSlide();
