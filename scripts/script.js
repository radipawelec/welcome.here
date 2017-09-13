
$(function() {

	var animationName = 'animated bounce';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	
    setTimeout(function(){
        $('#yourElement').removeClass('animated flipInX')
    }, 400);


	$('.btn-default').on('click', function() {
		$('#yourElement').addClass(animationName).one(animationEnd, function() {
			$(this).removeClass(animationName);
		});
	});
});