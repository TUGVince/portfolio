var os = 0;
var ks = 0;
function aboutView(){
	$(window).scroll(function(){
		
		var t = $(".about").height();
		var viewPortSize = $(window).height();
		var box = $(".badge");
		var triggerAt = 150;
		var triggerHeight = (t - viewPortSize) + triggerAt;
		var time = 0;
		if(os <= 0)
		{
			if ($(window).scrollTop() >= triggerHeight) {
				$("#abtop").animateCss("tada");
				$(".text").animateCss("slideInRight");
			    for(var k = 0; k < box.length; k++)
			    {
			    	$("#" + box[k].id).animate({opacity:1},time += 1000);
			    }
			    os++;
			}
		}
	});
}

function skillView(){
	$(window).scroll(function(){
		
		var t = $(".face").height();
		var viewPortSize = $(window).height();
		var triggerAt = 1500;
		var triggerHeight = (t - viewPortSize) + triggerAt;
		var time = 0;
		if(ks <= 0)
		{
			if ($(window).scrollTop() >= triggerHeight) {
				$("#left").animateCss("slideInLeft");
				$("#right").animateCss("slideInRight");
			    ks++;
			}
		}
	});
}