$(document).ready( function () {
 $('[data-toggle="tooltip"]').tooltip();   
$('#send').click(mail);

   // $('#sendmail').click(mail);
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







function parallaxScroll(){
        var scrolledY = $(window).scrollTop();
       
        $('#pic1').css('top','-'+((scrolledY*0.41))+'px');
        
    }




var mail = function() {
    console.log('hello');

var data = {
                   mail: $('[name=mail]').val(),
                   message: $('[name=message]').val()
            }
 var email =$('[name=mail]').val();


            if ((data.mail.length <1) || (data.message.length<1) || (data.mail.length <1 && data.message.length<1)) {
                
                $('#popup').html('Please enter a valid email or message  '+'<i class="fa fa-smile-o"></i>');
                $("#popup").delay(4000).fadeOut("slow", function () { $(this).remove(); });
                var popup= $('<h3>').attr('id', 'popup');
                $('.footer-icons').append(popup);
            }

                else {
                        var revString = email.split('').reverse().join('');
                        var rev= revString.slice(4,9);
                        var string = rev.split('').reverse().join('');

                        if (string ==='yahoo') {
                             $('#popup').html('Please enter another email besides a yahoo email  '+'<i class="fa fa-smile-o"></i>');
                            $("#popup").delay(4000).fadeOut("slow", function () { $(this).remove(); });
                            var popup= $('<h3>').attr('id', 'popup');
                            $('.footer-icons').append(popup);

                               $('[name=mail]').val('');
                                $('[name=message]').val('');
                        }
                            else {
                                 $('#popup').html('Thank you for the email '+'<i class="fa fa-smile-o"></i>');
                                    $("#popup").delay(4000).fadeOut("slow", function () { $(this).remove(); });

                                    var popup= $('<h3>').attr('id', 'popup');
                                     $('.footer-icons').append(popup);
                               


                               $('[name=mail]').val('');
                                $('[name=message]').val('');


                               
                             $.ajax({
                                        type: "POST",
                                        url: '/send',
                                        data: data,
                                       success: function(){

                                       },
                                       fail: function(){
                                     
                                       }
                                });
                            }
                }

};