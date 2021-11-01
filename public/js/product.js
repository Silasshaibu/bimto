
//Number function
window.onload=function(){
    var minusBtn = document.getElementById("minus"),
        plusBtn = document.getElementById("plus"),
        numberPlace = document.getElementById("numberPlace"),
        number = 0, /// number value
        min = 0, /// min number
        max = 30; /// max number
        
    minusBtn.onclick = function(){
        if (number>min){
           number = number-1; /// Minus 1 of the number
           numberPlace.innerText = number ; /// Display the value in place of the number   
        }
        if(number == min) {        
            numberPlace.style.color= "red";
            setTimeout(function(){numberPlace.style.color= "black"},500)
        }
        else {
          numberPlace.style.color="black";            
           }
                
    }
    plusBtn.onclick = function(){
        if(number<max){
           number = number+1;
           numberPlace.innerText = number ; /// Display the value in place of the number
        }     
        if(number == max){
               numberPlace.style.color= "red";
               setTimeout(function(){numberPlace.style.color= "black"},500)
        }
           
        else {
               numberPlace.style.color= "black";      
        }      
    }
  
  }
    document.getElementById("im1").onclick = function(){cl(1);}
    document.getElementById("im2").onclick = function(){cl(2);}
    document.getElementById("im3").onclick = function(){cl(3);}
    document.getElementById("im4").onclick = function(){cl(4);}

    function cl(k){
        for(var i =1 ; i<5; i++){
            if(i === k){
                document.getElementById("im"+k).className= "selected-img mini-images imageCoverCenter";
                document.getElementById("img"+k).style.display="block"
            }else{
            document.getElementById("img"+i).style.display="none"
            document.getElementById("im"+i).className= "mini-images imageCoverCenter";
        }
    }
    }