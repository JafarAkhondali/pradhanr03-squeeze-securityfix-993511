$(document).ready( function () {
   $("#butt").on('click', function() {
console.log('clicked');
    // Prevent default anchor click behavior
    // event.preventDefault();

    // // Store hash
    // var hash = this.hash;

    // // Using jQuery's animate() method to add smooth page scroll
    // // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    // $('html, body').animate({
    //   scrollTop: $(hash).offset().top
    // }, 800, function(){
   
    //   // Add hash (#) to URL when done scrolling (default click behavior)
    //   window.location.hash = hash;
    // });
  });

$(window).bind('scroll',function(e){
        parallaxScroll();

    });


// window.addEventListener("scroll", parallax, false);


});

function parallaxScroll(){
        var scrolledY = $(window).scrollTop();
       
        $('#pic1').css('top','-'+((scrolledY*0.36))+'px');
        
    }

// function parallax() {

//   var layer1 = document.getElementById('pic1'); 
//   layer1.style.top = -(window.pageYOffset/2.8)+'px';
  
// }