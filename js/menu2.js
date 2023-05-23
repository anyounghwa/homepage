$(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed:1500,
        index:2,
        arrows:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
})


// https://kenwheeler.github.io/slick/
// 브레이크포인트(breakpoint), 중단점, 중지점은 소프트웨어 개발에서 프로그램을 의도적으로 잠시 또는 아예 멈추게 하는 장소를 가리키며 디버깅 목적으로 넣는 것이다