// Selections
const modalCtaOpen = document.querySelector(".js-open-modal");
const modalCtaClose = document.querySelector(".js-close-modal");
const page = document.querySelector(".js-page");

const openModal = _ => {
  page.classList.add("modal-is-open");
};

const closeModal = _ => {
  page.classList.remove("modal-is-open");
};

modalCtaOpen.addEventListener("click", openModal);
modalCtaClose.addEventListener("click", closeModal);
