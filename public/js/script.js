var slideIndex = 0;
showSlides();
function plusSlides(n) {
  if(slideIndex <= 3 && n < 0){
    slideIndex -= n* 2
    }else{
    slideIndex += n
  }
}
      
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("trendingProduct");
        console.log(slides)
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex ++;
        if(slideIndex >= slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex].style.display = "block";
        if(slideIndex < slides.length){
          slides[slideIndex + 1].style.display = "block";}else{
          slides[slideIndex - slides.length].style.display = "block";
        }
        setTimeout(showSlides, 1500);
       slideIndex+=2
      }