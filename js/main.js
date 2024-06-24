window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 400) {
    document.querySelector(".header").classList.add("header--scroll");
  } else if (currentScrollPos < 200) {
    document.querySelector(".header").classList.remove("header--scroll");
  }
};

const slider = new Siema({
  selector: ".slider",
  loop: true,
  onChange: onChangeSlider,
});
function onChangeSlider() {
  const dots = document.querySelectorAll(".reviews__dot");
  dots.forEach((dot) => dot.classList.remove("reviews__dot--active"));
  dots[slider.currentSlide].classList.add("reviews__dot--active");
}

const menuSlider = new Siema({
  selector: ".our-menu__items--mobile",
  loop: true,
  onChange: onChangeMenuSlider,
});
function onChangeMenuSlider() {  
  const dots = document.querySelectorAll(".our-menu__dot");
  dots.forEach((dot) => dot.classList.remove("our-menu__dot--active"));
  dots[menuSlider.currentSlide].classList.add("our-menu__dot--active");
}


const modalMenu = document.querySelector(".modal-menu");
const burgerBtn = document.querySelector(".header-burger__btn");
const modalClose = document.querySelector(".modal-menu__close");
burgerBtn.addEventListener("click", () => {
  modalMenu.classList.add("modal-menu--show");
});
modalClose.addEventListener("click", () => {
  modalMenu.classList.remove("modal-menu--show");
});


const yearText = document.querySelector(".footer__copyright span");
yearText.innerHTML = new Date().getFullYear();
