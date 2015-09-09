// jQuery for smooth page scroll to an anchor tag
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 1000, 'swing');
  });
});

// Using $.ajax + Mandrill to send email from form
$('#submitBtn').click(function() {
          var contact_message = "Message: " + $('.contact_message').val() + " " + "Name: " + $('.contact_name').val() + " " + "Email: " + $('.contact_email').val();
          console.log(contact_message);
        $.ajax({
          type: "POST",
          url: "https://mandrillapp.com/api/1.0/messages/send.json",
          data: {
            "key": "0XTg7rA7pBbKSCKg4oIy9w",
            "message": {
                "html": contact_message,
                "text": contact_message,
                "from_email": "duplantis@gmail.com",
                "from_name": $('.contact_name').val() + " - " + "Portfolio Site",
                "to": [
                    {
                        "email": "duplantis@gmail",
                        "name": "Bryan",
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": "duplantis@gmail"
                }
              }
            }
         });
       });







