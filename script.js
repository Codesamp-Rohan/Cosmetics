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
// JS
ScrollReveal().reveal(".navbar");
ScrollReveal().reveal(".topAreaText", { delay: 300 });
ScrollReveal().reveal(".aboutImage", { delay: 500 });
ScrollReveal().reveal(".about>h1", { delay: 500 });

ScrollReveal().reveal("#boxContent1", { delay: 200 });
ScrollReveal().reveal("#boxContent2", { delay: 400 });
ScrollReveal().reveal("#boxContent3", { delay: 600 });
ScrollReveal().reveal("#boxContent4", { delay: 800 });

ScrollReveal().reveal(".boxImage1", { delay: 200 });
ScrollReveal().reveal(".boxImage2", { delay: 400 });
ScrollReveal().reveal(".boxImage3", { delay: 600 });
ScrollReveal().reveal(".boxImage4", { delay: 800 });

ScrollReveal().reveal(".rangeLine", { delay: 300 });

$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
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
  leftProduct.style.marginTop = "0vh";
});
option2.addEventListener("click", function () {
  productImage2.classList.remove("hidden");
  productImage1.classList.add("hidden");
  productImage3.classList.add("hidden");
  para2.style.fontWeight = "600";
  para1.style.fontWeight = "100";
  para3.style.fontWeight = "100";
  leftProduct.style.marginTop = "-15vh";
});
option3.addEventListener("click", function () {
  productImage3.classList.remove("hidden");
  productImage1.classList.add("hidden");
  productImage2.classList.add("hidden");
  para3.style.fontWeight = "600";
  para1.style.fontWeight = "100";
  para2.style.fontWeight = "100";
  leftProduct.style.marginTop = "-30vh";
});
