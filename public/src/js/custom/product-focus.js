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

/* função adicionar as favoritos*/
let teste = document.getElementById('heart').style.backgroundColor = ''

function addFavorite(){
  if(teste = '#457b9d'){
    document.getElementById('heart').style.backgroundColor = '#E63946'
  } 
    // document.getElementById('heart').style.color = '#E63946'
}

function removeFavorite(){
    if(teste = '#E63946'){
    document.getElementById('heart').style.backgroundColor = '#457b9d'
  } 
  // document.getElementById('heart').style.color = '#E63946'
}

function favorite(){
  teste != '#E63946' ? removeFavorite() : addFavorite() 
  console.log(favorite)
}