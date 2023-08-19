document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 4,
    breakpoints: {
      1400: {
        perPage: 3,
      },
      768: {
        perPage: 2,
        // Adjust other settings for tablet view...
      },
      450: {
        perPage: 1,
        // Adjust other settings for mobile view...
      },
    },
    autoScroll: {
      speed: 1.4,
    },
  }).mount(window.splide.Extensions);
});

const splide__slide = document.querySelectorAll(".splide__slide");
const splide_slide_overlay_content = document.querySelectorAll(
  ".splide-slide-overlay-content "
);

splide__slide.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    splide_slide_overlay_content[index].classList.add(
      "splide-slide-overlay-content-mouseover"
    );
  });

  item.addEventListener("mouseout", () => {
    splide_slide_overlay_content[index].classList.remove(
      "splide-slide-overlay-content-mouseover"
    );
  });
});

const section_2 = document.querySelector(".scrolling-section-2");
const img_1_top = document.querySelector(".img_1_top");
const img_2_top = document.querySelector(".img_2_top");
const img_1_bottom = document.querySelector(".img_1_bottom");
const img_2_bottom = document.querySelector(".img_2_bottom");
const image_flex_1 = document.querySelector(".image-flex-1");
const image_flex_2 = document.querySelector(".image-flex-2");
let hasEnteredView = false; // Flag to track if section entered view

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "-50px 0px",
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasEnteredView) {
      img_1_top.classList.remove("top_slide");
      img_1_bottom.classList.remove("bottom_slide");
      img_1_top.classList.add("hide");
      img_1_bottom.classList.add("hide");

      img_2_top.classList.add("top_slide");
      img_2_bottom.classList.add("bottom_slide");
      hasEnteredView = true; // Set the flag to true once section entered view
    } else if (!entry.isIntersecting && hasEnteredView) {
      img_1_top.classList.remove("hide");
      img_1_bottom.classList.remove("hide");
      img_2_top.classList.remove("top_slide");
      img_2_bottom.classList.remove("bottom_slide");
      img_1_top.classList.add("top_slide");
      img_1_bottom.classList.add("bottom_slide");

      hasEnteredView = false; // Reset the flag when exiting view
    }
  });
}, options);

observer.observe(section_2);

// img_2_top.addEventListener("mouseover", () => {

// });
