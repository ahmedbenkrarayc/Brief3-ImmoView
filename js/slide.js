
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
document.getElementById('button_de_soumettre').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('text_de_message').value;

  if (!username || !phone || !email || !message) {
      alert('Veuillez remplir tous les champs.');
      return;
  }
 alert("soumettre avec succes")
});

let image=Document.getElementsById("grand_image1");
function changerImage(nouvelleImage) {
  document.getElementById('grand_image1').src = nouvelleImage;
}
