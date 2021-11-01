// Carousel
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  if(slideIndex < 3 && n < 0){
    slideIndex = 19 + n
    showSlides(slideIndex)
    }else{
    slideIndex += n
    showSlides(slideIndex)
  }
}
      
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("trendingProduct");
  
    for(i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
      if(slideIndex >= slides.length) {
            slideIndex = 1
      }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
      if(slideIndex < slides.length){
          slides[slideIndex + 1].style.display = "block";}else{
          slides[slideIndex - slides.length].style.display = "block";
     }
}

