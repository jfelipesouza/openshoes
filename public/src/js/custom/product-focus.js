/* função carousel de imagem */
let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

/* função adicionar aos favoritos*/
let save_btn = document.getElementById('heart').style.backgroundColor = ''

function addFavorite(){
  if(save_btn = '#457b9d'){
    document.getElementById('heart').style.backgroundColor = '#E63946'
  } 
}

function removeFavorite(){
    if(save_btn = '#E63946'){
    document.getElementById('heart').style.backgroundColor = '#457b9d'
  } 
}

function favorite(){
  save_btn != '#E63946' ? removeFavorite() : addFavorite() 
}