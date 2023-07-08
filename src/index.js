let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
    console.log(slideIndex);
  }
  if (n < 1) {
    slideIndex = slides.length;
    console.log(`n<1 & index is${slideIndex}`);
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
    slides[i].className = slides[i].className.replace("display", "");
  }
  slides[slideIndex - 1].classList.toggle("display");
  dots[slideIndex - 1].className += " active";
}
