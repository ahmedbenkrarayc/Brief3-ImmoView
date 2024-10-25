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

  
  if (slideIndex === 1) {

    slides[slideIndex].style.display = "block";  
    
    slides[2].style.display = "block"; 
    slides[3].style.display = "block";
    slides[4].style.display ="block";
    slides[5].style.display ="block";
  } else if (slideIndex === 2) {
    
    slides[2].style.display = "block"; 
    slides[3].style.display = "block";
    slides[4].style.display ="block";
    slides[5].style.display ="block";
    slides[6].style.display ="block";
   
  } else if  (slideIndex === 3){
    slides[3].style.display = "block"; 
    slides[4].style.display = "block";
    slides[5].style.display ="block";
    slides[6].style.display ="block";
    slides[7].style.display ="block";
    
 
  }

 
  dots[slideIndex - 1].className += " active";
  console.log(" slideS:", slides.length);

  console.log("Current slide index:", slideIndex);
}

function ShowAll(){
  
  let propreties = document.getElementsByClassName("ShowedInClick");
  for (i = 0; i < propreties.length; i++) {
    propreties[i].style.display = "block";  
  }
}


// details java script code 

let image=Document.getElementsById("grand_image1");
function changerImage(nouvelleImage) {
  document.getElementById('grand_image1').src = nouvelleImage;
}

document.getElementById("button_de_soumettre").addEventListener("click", function() {
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
