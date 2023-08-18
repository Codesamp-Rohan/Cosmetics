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

// const cursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", (e) => {
//   setTimeout(() => {
//     cursor.style.left = e.clientX + "px";
//     cursor.style.top = e.clientY + "px";
//   }, 10);
// });

// JS
ScrollReveal().reveal(".navbar");
ScrollReveal().reveal(".topAreaText", { delay: 300 });
ScrollReveal().reveal(".aboutImage", { delay: 500 });
ScrollReveal().reveal(".about>h1", { delay: 500 });
