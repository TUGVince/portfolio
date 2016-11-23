$(document).ready(function(){
	var num = 50;
	$('body').addClass('loaded');
	$(window).scroll(function(event){
		if ($(window).scrollTop() > num) 
	    {
	        $('.header').addClass('fixed');
	    } 
	    else 
	    {
	        $('.header').removeClass('fixed');
	    }
	});
	navTo(); //handle nav
	aboutView();
	skillView();
	$("#hi").animateCss("slideInRight");
	$("#wo").animateCss("slideInRight");
});
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});



function navTo()
{
	$("a").on('click', function(event) {
	    if (this.hash !== "") {
		    event.preventDefault();
		    var hash = this.hash;
		    $('html, body').animate({
		    	scrollTop: $(hash).offset().top
		    }, 1000, function(){
		    	window.location.hash = hash;
		    });
		} // End if
	});
}
 $(function(){
	
	 $(window).scroll(function(){
 	 	scroll = $('body').scrollTop();
	 	console.log(scroll);

	 	if(scroll >100){
	 		$('.navbar-fixed-top').addClass('show');
	 	} 
	 	else if(scroll <100){
	 		$('.navbar-fixed-top').removeClass('show');
	 	}
	})

	 $('.main').css({'height': $(window).height()});
	 $(window).resize(function() {
	 	$('.main').css({'height': $(window).height()})
	 });
	 	$('.slide1').css({'height':$(window).height()});


})  


