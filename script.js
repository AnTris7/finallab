const buyBtns = document.querySelectorAll(".btn-buy");

buyBtns.forEach(function (btn) {
  btn.addEventListener("click", addToCart);
});

function addToCart(e) {
  let button = e.target;
  button.innerText = "Added to cart!";
  button.style.width = "90%";
  let shopItem = button.parentElement.parentElement;
  let itemName = shopItem.getElementsByClassName("item-label")[0].innerText;
  let itemPrice = shopItem.getElementsByClassName("price")[0].innerText;
  let imgSrc = shopItem.getElementsByClassName("image")[0].src;

  console.log(itemName, itemPrice);
  console.log(imgSrc);
}

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
