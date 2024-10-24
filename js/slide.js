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

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current, previous, and next slides
  if (slideIndex === 0) {
    slides[slideIndex].style.display = "block";  
    slides[slides.length - 1].style.display = "block"; // Last slide
    slides[1].style.display = "block"; // Second slide
  } else if (slideIndex === slides.length-1) {
    slides[slideIndex ].style.display = "block"; // Current slide
    slides[slideIndex - 1].style.display = "block"; // Previous slide
    slides[0].style.display = "block"; // First slide
  } else {
    slides[slideIndex ].style.display = "block"; // Current slide
    slides[slideIndex+1].style.display = "block"; // Next slide
    slides[slideIndex - 1].style.display = "block"; // Slide after next
  }

  // Set the active dot
  dots[slideIndex - 1].className += " active";
  console.log(" slideS:", slides.length);

  console.log("Current slide index:", slideIndex);
}
