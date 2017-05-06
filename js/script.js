console.log("JS WORKS gffg!");
console.log("Font-family cormorant");


$( document ).ready(function() {
    
    var inputs = document.getElementsByTagName('input');

    
    for(i=0; i<inputs.length; i++){
        inputs[i].addEventListener("click", function(){
            this.classList.add('bigger-font-input');
        });
    }

    
    
    var numberHMTL = document.querySelectorAll('h5');
    console.log(numberHMTL);
    var firstNumber = 0;
    var numberIntervalFirst = setInterval(function(){
         if(firstNumber>=10){
             clearInterval(numberIntervalFirst);
         }
        else{
            firstNumber+=1;
            numberHMTL[0].innerHTML = firstNumber;
        }
    }, 100);
    
        var secondNumber = 0;
        var numberIntervalSecond = setInterval(function(){
         if(secondNumber>=120){
             clearInterval(numberIntervalSecond);
         }
        else{
            secondNumber+=1;
            numberHMTL[1].innerHTML = secondNumber;
        }
    }, 25);
    
        var thirdNumber = 0;
        var numberIntervalThird = setInterval(function(){
         if(thirdNumber>=50){
             clearInterval(numberIntervalThird);
         }
        else{
            thirdNumber+=1;
            numberHMTL[2].innerHTML = thirdNumber;
        }
    }, 25);

    

    

var progressbar1 = document.querySelector('.progressbar1');
var progressbar2 = document.querySelector('.progressbar2');
var progressbar3 = document.querySelector('.progressbar3');
var progressbar4 = document.querySelector('.progressbar4');
var progressbar5 = document.querySelector('.progressbar5');
var progressbar6 = document.querySelector('.progressbar6');

    
var ip1=0;
var ip2=0;
var ip3=0;
var ip4=0;
var ip5=0;
var ip6=0;

    
    var id1 = setInterval(function(){
    if(ip1>=93){
            clearInterval(id1);
        }
        else{
                    ip1+= 2;
                    progressbar1.style.width = ip1 + '%';
        }

}, 10);


    var id2 = setInterval(function(){
    if(ip2>=56){
            clearInterval(id2);
        }
        else{
                    ip2+= 2;
                    progressbar2.style.width = ip2 + '%';
        }

}, 10);
    
    
    var id3 = setInterval(function(){
    if(ip3>=64){
            clearInterval(id3);
        }
        else{
                    ip3+= 2;
                    progressbar3.style.width = ip3 + '%';
        }

}, 10);
    
    
    var id4 = setInterval(function(){
    if(ip4>=97){
            clearInterval(id4);
        }
        else{
                    ip4+= 2;
                    progressbar4.style.width = ip4 + '%';
        }

}, 10);

    
    var id5 = setInterval(function(){
    if(ip5>=75){
            clearInterval(id5);
        }
        else{
                    ip5+= 2;
                    progressbar5.style.width = ip5 + '%';
        }

}, 10);
    
    
    var id6 = setInterval(function(){
    if(ip6>=93){
            clearInterval(id6);
        }
        else{
                    ip6+= 2;
                    progressbar6.style.width = ip6 + '%';
        }

}, 10);


    
$('.firsticonhover').hover(
        function () {
        $( ".myicon1" ).css("color", "#3B5998"); //facebook color
        $( ".divicon1" ).css("background-color", "white");
                   }, 
        function () {
        $( ".myicon1" ).css("color", "#ffffff");
        $( ".divicon1" ).css("background-color", "#212121");
               });

    
        
$('.secondiconhover').hover(
        function () {
        $( ".myicon2" ).css("color", "#0FB5EE") //twitter color
        $( ".divicon2" ).css("background-color","white" );
                   }, 
        function () {
        $( ".myicon2" ).css("color", "#ffffff" );
        $( ".divicon2" ).css("background-color","#212121" );
               });
    
    
        
    $('.thirdiconhover').hover(
        function () {
        $( ".myicon3" ).css("color", "#0077B5") //LinkedIn color
        $( ".divicon3" ).css("background-color","white" );
                   }, 
        function () {
        $( ".myicon3" ).css("color", "#ffffff" );
        $( ".divicon3" ).css("background-color","#212121" );
                   });
    
    
    
    $('.fourthiconhover').hover(
        function () {
        $( ".myicon4" ).css("color", "#E04006") //Google Plus color
        $( ".divicon4" ).css("background-color","white" );
                   }, 
        function () {
        $( ".myicon4" ).css("color", "#ffffff" );
        $( ".divicon4" ).css("background-color","#212121" );
               });
    
    
    
    
    
    

    $('.lastnavicon').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    
   
    
    
    
    
    
    
    
    
    
});


