$(function(){
	
	// 슬라이드
	$('.single-item').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: true,
	});

	// 페이드인 아웃
	// $('.fade').slick({
		// dots: true,
		// infinite: true,
		// speed: 1000,
		// fade: true,
		// cssEase: 'linear',
		// autoplay: true,
	  // });

	
	// strollTop값으로 나타내기
	$(".labindex").hide();
	$(window).scroll(function(){
	var scrollTopval = $(this).scrollTop();
	//alert(scrollTopval);
	if(scrollTopval>=200){
		$(".labindex").fadeIn('slow');
	}
	if(scrollTopval>=1300){
		setInterval ( numbering, 10 );
	}

		
	});
	
	// 넘버
	number=0;
	function numbering() {
		if( number<300){
			number++;
			$(".img>p").text(number);
		}
		else return false;
	}
	
	
	//상품 슬라이드	
	//next 0-1-2-3....
	function product_next(){
        $(".product>div>ul").animate({left:"-320px"},800,function(){$(".product>div>ul>li:first").appendTo(".product>div>ul");
        $(".product>div>ul").css("left","0px");
			});
    }
    
	var clear1 = setInterval(product_next,3000);
			
	$(".product_next").click(function(){
				clearInterval(clear1);
				product_next();
				return false;
			});
			
	//prev 8-7-6-5-4...	

	function product_prev() {
		$(".product>div>ul>li:last").prependTo(".product>div>ul");
		$(".product>div>ul").css("left", "-320px");			
		$(".product>div>ul").animate({left : "0px"},800);
			
		}
		
	$(".product_pre").click(function(){
				clearInterval(clear1); 
				product_prev()
				return false;
			});
				

});

/* 
	$("새요소").prependTo("요소선택");   선택한 요소의 맨 앞위치에 새 요소를 추가합니다
	$("새요소").appendTo("요소선택");   선택한 요소의 마지막위치에 새 요소를 추가합니다
*/
	
	
	
	
	
		

		