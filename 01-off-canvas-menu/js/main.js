const toggleCta = document.querySelector(".js-toggle-off-canvas");
const page = document.querySelector(".js-page");

toggleCta.addEventListener("click", function() {
  page.classList.toggle("off-canvas-is-open");
});
