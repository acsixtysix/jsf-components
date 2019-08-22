// select all the accordions from the DOM
const accordions = document.querySelectorAll('[data-accordion="accordion"]');

// you will need to loop through them
accordions.forEach(accordion => {
  //select each accordion title from the accordion
  const accordionTitle = accordion.querySelector('[data-accordion="title"]');

  // add and event to add the is-open class
  accordionTitle.addEventListener("click", e => {
    accordion.classList.toggle("is-open");
  });
});
