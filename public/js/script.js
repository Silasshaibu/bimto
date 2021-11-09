var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 2000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 1000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 1000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("trendingProduct");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  } 
 if(slideIndex+1 < slides.length){ 
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex+1].style.display = "block";
}else{
  slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex].style.display = "block";
  slides[slideIndex+1].style.display = "block";
  }
}










// // Carousel
// var slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//   if(slideIndex < 3 && n < 0){
//     slideIndex = 19 + n
//     showSlides(slideIndex)
//     }else{
//     slideIndex += n
//     showSlides(slideIndex)
//   }
// }
      
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("trendingProduct");
  
//     for(i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//       if(slideIndex >= slides.length) {
//             slideIndex = 1
//       }
//     slides[slideIndex - 1].style.display = "block";
//     slides[slideIndex].style.display = "block";
//       if(slideIndex < slides.length){
//           slides[slideIndex + 1].style.display = "block";}else{
//           slides[slideIndex - slides.length].style.display = "block";
//      }
// }

