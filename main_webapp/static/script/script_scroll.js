document.addEventListener("DOMContentLoaded", function() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    window.addEventListener("scroll", function () {
      let header = document.querySelector("header"); 
      if (window.scrollY > 400) { 
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});


