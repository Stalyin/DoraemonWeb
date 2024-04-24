"use strict";

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navbarMenuBtn = document.querySelector(".navbar-menu-btn");

const navbarForm = document.querySelector(".navbar-form");
const navbarFormClosebtn = document.querySelector(".navbar-form-close");
const navbarSearchBtn = document.querySelector(".navbar-search-btn");

function navIsActive() {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  navbarMenuBtn.classList.toggle("active");
}

navbarMenuBtn.addEventListener("click", navIsActive);

const searchBarIsActive = () => navbarForm.classList.toggle("active");

navbarSearchBtn.addEventListener("click", searchBarIsActive);
navbarFormClosebtn.addEventListener("click", searchBarIsActive);

function openVideo(videoSrc) {
  var autoplayUrl =
    videoSrc + (videoSrc.includes("?") ? "&autoplay=1" : "?autoplay=1");
  var leftPosition = window.screen.width / 2 - 1000 / 2;
  var topPosition = window.screen.height / 2 - 600 / 2;
  window.open(
    autoplayUrl,
    "_blank",
    `width=1000,height=600,left=${leftPosition},top=${topPosition}`
  );
}
