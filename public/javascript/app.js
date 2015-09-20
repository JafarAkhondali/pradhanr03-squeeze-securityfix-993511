$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#send').click(mail);


});

$(window).bind('scroll', function(e) {
  parallaxScroll();

});


function parallaxScroll() {
  var scrolledY = $(window).scrollTop();

  $('#pic1').css('top', '-' + ((scrolledY * 0.41)) + 'px');

}




var mail = function() {
  console.log('hello');
  var popup;
  var data = {
    mail: $('[name=mail]').val(),
    message: $('[name=message]').val()
  }
  var email = $('[name=mail]').val();


  if ((data.mail.length < 1) || (data.message.length < 1) || (data.mail.length < 1 && data.message.length < 1)) {

    $('#popup').html('Please enter a valid email or message  ' + '<i class="fa fa-smile-o"></i>');
    $("#popup").delay(4000).fadeOut("slow", function() {
      $(this).remove();
    });
    popup = $('<h3>').attr('id', 'popup');
    $('.footer-icons').append(popup);
  } else {
    var revString = email.split('').reverse().join('');
    var rev = revString.slice(4, 9);
    var string = rev.split('').reverse().join('');

    if (string === 'yahoo') {
      $('#popup').html('Please enter another email besides a yahoo email  ' + '<i class="fa fa-smile-o"></i>');
      $("#popup").delay(4000).fadeOut("slow", function() {
        $(this).remove();
      });
      popup = $('<h3>').attr('id', 'popup');
      $('.footer-icons').append(popup);

      $('[name=mail]').val('');
      $('[name=message]').val('');
    } else {
      $('#popup').html('Thank you for the email ' + '<i class="fa fa-smile-o"></i>');
      $("#popup").delay(4000).fadeOut("slow", function() {
        $(this).remove();
      });

      popup = $('<h3>').attr('id', 'popup');
      $('.footer-icons').append(popup);



      $('[name=mail]').val('');
      $('[name=message]').val('');



      $.ajax({
        type: "POST",
        url: '/send',
        data: data,
        success: function() {

        },
        fail: function() {

        }
      });
    }
  }

};