const toggleCta = document.querySelector(".js-toggle-off-canvas");
const page = document.querySelector(".js-page");

const toggleOffCanvas = _ => {
  // underscore due to no argument in the arrow function
  page.classList.toggle("off-canvas-is-open");
};

toggleCta.addEventListener("click", toggleOffCanvas);
