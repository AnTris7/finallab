const buyBtns = document.querySelectorAll(".btn-buy");

buyBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.target.innerText = "Added to cart!";
    e.target.style.width = "90%";
  });
});

const mobileNavIcon = document.querySelector(".mobile-nav-btn");

const mobileNav = document.querySelector(".mobile-nav");

mobileNavIcon.addEventListener("click", function () {
  mobileNav.classList.toggle("show-menu");
});

const modalOverlay = document.querySelector(".modal");

const modalContent = document.querySelector(".modal-content");
const signUp = document.querySelector("#signup");

signUp.addEventListener("click", function () {
  modalOverlay.classList.remove("hidden");
  modalContent.classList.remove("hidden");
});

const closePopup = document.querySelector(".close");

closePopup.addEventListener("click", function () {
  modalOverlay.classList.add("hidden");
  modalContent.classList.add("hidden");
});
