let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slide = document.getElementsByClassName("slides");

  for(i = 0; i < dots.length; i++) {
    slide[i].style.display = 'none';
  }

  slide[slideIndex-1].style.display = "block";
}