let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Catalog-slideb");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

 
if(slideIndex == 1){
    slides[slideIndex].style.display = "block";  
    slides[slides.length-1].style.display = "block";
    slides[slideIndex+1].style.display = "block";
}
else if (slideIndex == slides.length  ){
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex].style.display = "block";
    slides[0].style.display = "block";
}else if(slideIndex > 1 && slideIndex < slides.length){
    slides[slideIndex-1].style.display = "block";  
    slides[slideIndex].style.display = "block";
    slides[slideIndex+1].style.display = "block";
}

//   console.log("slide -1");
 
  console.log("slide ");
  console.log(slideIndex);
//   console.log("slide length");
//   console.log(slides.length);
  
//   dots[slideIndex-1].className += " active";
}