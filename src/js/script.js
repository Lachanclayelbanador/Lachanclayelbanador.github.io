$(document).ready(function(){
    //open modal
    $('#open_modal').click(function(){
        $('#modal_to_open').css(
            {
                'display': 'block'
            }
        );
    });

    //close modal
    $('#close_modal').click(function(){
        $('#modal_to_open').css(
            {
                'display':'none'
            }
        );
    });

    // Change nav bar links color when on white background
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".nav_text");
          var $banner = $(".banner-image");
          // if : scrolled past banner image, changes css class 
          $nav.toggleClass('scrolled', $(this).scrollTop() > ( 0.95 * $banner.height()));
        });
    });
    //send mail with  ajax
    $('#send_email').click(function(e){
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			name: $('#name').val(),
            firstname: $('#firstname').val(),
			message: $('#message').val()
        };
        //AJAX
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#email').val("");
                    $('#name').val("");
                    $('#firstname').val("")
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
					$('#name').val("");
					$('#firstname').val("")
					$('#message').val("")
				}, 3000);
			}
		});
	});
});