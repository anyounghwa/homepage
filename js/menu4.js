$(function(){
    // accordion
	$( "#accordion" ).accordion({
		active: false,
		collapsible: true,
	});
	
	
	//멀티item
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll:4,
		autoplay:true,
	});
})