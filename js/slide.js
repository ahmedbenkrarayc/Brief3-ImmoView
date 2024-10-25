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
  if (slideIndex === 1) {
    slides[0].style.display = "block";  
    slides[slides.length - 1].style.display = "block"; // Last slide
    slides[1].style.display = "block"; // Second slide
  } else if (slideIndex === slides.length) {
    slides[slideIndex - 1].style.display = "block"; // Current slide
    slides[slideIndex - 2].style.display = "block"; // Previous slide
    slides[0].style.display = "block"; // First slide
  } else {
    slides[slideIndex - 1].style.display = "block"; // Current slide
    slides[slideIndex].style.display = "block"; // Next slide
    slides[slideIndex + 1].style.display = "block"; // Slide after next
  }

  // Set the active dot
  dots[slideIndex - 1].className += " active";
  
  console.log("Current slide index:", slideIndex);
}



// details java script code 

let image=Document.getElementsById("grand_image1");
function changerImage(nouvelleImage) {
  document.getElementById('grand_image1').src = nouvelleImage;
}

document.getElementById('button_de_soumettre').addEventListener('click', function() {
  const username = document.getElementById('username').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = '';
  if (!username || !phone || !email || !message) {
      errorMessage.textContent = 'Tous les champs sont requis.';
      return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Veuillez entrer une adresse email valide.';
      return;
  }
alert('Formulaire soumis avec succès !');
});
