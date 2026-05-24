const slides = Array.from(document.querySelectorAll(".slide"));
const currentSlide = document.getElementById("current-slide");
const totalSlides = document.getElementById("total-slides");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");

let activeIndex = getInitialIndex();

totalSlides.textContent = String(slides.length);
showSlide(activeIndex, false);

prevButton.addEventListener("click", () => showSlide(activeIndex - 1));
nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    showSlide(activeIndex + 1);
  }

  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    showSlide(activeIndex - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    showSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    showSlide(slides.length - 1);
  }
});

window.addEventListener("hashchange", () => {
  const index = getInitialIndex();
  showSlide(index, false);
});

function showSlide(index, updateHash = true) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeIndex);
  });

  currentSlide.textContent = String(activeIndex + 1);
  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === slides.length - 1;

  if (updateHash) {
    history.replaceState(null, "", `#${activeIndex + 1}`);
  }
}

function getInitialIndex() {
  const requested = Number.parseInt(window.location.hash.replace("#", ""), 10);

  if (Number.isNaN(requested)) {
    return 0;
  }

  return Math.max(0, Math.min(requested - 1, slides.length - 1));
}
