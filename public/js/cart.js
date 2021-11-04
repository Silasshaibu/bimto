//Number function

var subtotal = 0
var numberPlace = document.getElementById("numberPlace"),
    max = 30; /// max number
    number = 0, /// number value
    min = 0; /// min number



function minusBtn(){
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
               
        total(number);
        
    }

function plusBtn(){
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
        total(number);    
    }
  
    var numberPlace1 = document.getElementById("numberPlace1"),
    max1 = 30; /// max number
    number1 = 0, /// number value
    min1 = 0; /// min number



function minusBtn1(){
        if (number1>min1){
           number1 = number1-1; /// Minus 1 of the number
           numberPlace1.innerText = number1 ; /// Display the value in place of the number   
        }
        if(number1 == min1) {        
            numberPlace1.style.color= "red";
            setTimeout(function(){numberPlace1.style.color= "black"},500)
        }
        else {
          numberPlace1.style.color="black";            
           }
           total1(number1)
                
    }

function plusBtn1(){
         if(number1<max1){
           number1 = number1+1;
           numberPlace1.innerText = number1 ; /// Display the value in place of the number1
        }     
        if(number1 == max1){
               number1Place1.style.color= "red";
               setTimeout(function(){numberPlace1.style.color= "black"},500)
        }
           
        else {
               numberPlace1.style.color= "black";      
        }      
        total1(number1)
    }



var seg = document.getElementById("seg1")
var seg2 = document.getElementById("seg2")

function remove(){
    seg.style.display = "none"
}
function remove2(){
    seg2.style.display = "none"
}
  

function total(number){
   var t = number * 7
   subtotal = t
   document.getElementById("tot1").textContent= '$'+ t
   document.getElementById("subt").textContent= '$'+ subtotal
}
function total1(number){
    var t = number * 8
    subtotal = t
    document.getElementById("tot").textContent= '$'+ t
    document.getElementById("subt").textContent= '$'+ subtotal
 }

  
