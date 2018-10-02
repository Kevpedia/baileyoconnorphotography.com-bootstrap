$(document).ready(function(){
 $('.header').height($(window).height());

 // $('.navbar a').click(function () {
 // 	// animate scroll
 // 	$("body,html").animate({
 // 		scrollTop:$("#" + $(this).data('value').offset().top
 // 	}, 1000);
 // })

 	$(".navbar a").click(function(){
	 	$("body,html").animate({
	 		scrollTop:$("#" + $(this).data('value')).offset().top - 100
	 	},1000)
	  
	})
	
	$("#see-work-button").click(function(){
	 	$("body,html").animate({
	 		scrollTop:$("#" + $(this).data('value')).offset().top - 100
	 	},1000)
	  
	})
})
