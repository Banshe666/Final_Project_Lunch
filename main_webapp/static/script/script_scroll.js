document.addEventListener("DOMContentLoaded", function() {
  function handleScrollEffect() {
    let header = document.querySelector("header");

    if (window.matchMedia("(min-width: 768px)").matches) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { 
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    } else {
      header.classList.remove("scrolled");
    }
  }

  handleScrollEffect();

  window.addEventListener("resize", handleScrollEffect);
});


