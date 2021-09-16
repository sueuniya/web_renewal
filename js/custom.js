$(function(){

 

  var mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: "auto",
    loop: true,
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
      el: ".main-slide .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slide .next_arrow_btn",
      prevEl: ".main-slide .prev_arrow_btn",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    
  });


  gsap.to(".category ul li", {

    scrollTrigger: {
      trigger: ".main-slide ",
      start: "+=10",
      end: "+=600",

    },
    opacity: 1,
    stagger: .1,

  });

  
  var bg_slide = new Swiper(".bg_slide", {
    loop: true,
    simulateTouch:false
  });

  var product_swiper = new Swiper(".items-Swiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },

    on:{
      init:function(){ //초기값 확인용 
           idx = this.realIndex;
           console.log(idx);
      },
      slideChange:function(){ //슬라이가 되자마자 실행되기때문에 
        idx = this.realIndex + 1 ; //+1을해줌으로써 0이없고 1번부터시작한다
        console.log(idx);
        bg_slide.slideTo(idx);
      }
    }
    
  });

  // product_swiper.on('slideChange', function () {
  //   // console.log('slide changed');
  //   idx = this.realIndex; //고유한 값이 있다
  //   bg_slide.
  // });

  // product_swiper.controller.control = bg_slide;


  // $('.start').on('click',function(e){
  //   mainSwiper.autoplay.start();
  //   document.querySelector(".start").style.display="none";
  //   document.querySelector(".stop").style.display="block";
  //   return false;
  // });
  // $('.stop').on('click',function(e){
  //   mainSwiper.autoplay.stop();
  //   document.querySelector(".stop").style.display="none";
  //   document.querySelector(".start").style.display="block";
  //   return false;
  // });
  

$('.play-btn').click(function(){
  if($(this).hasClass('play')){
    $(this).removeClass('play')
    mainSwiper.autoplay.start();
  }else{
  $(this).addClass('play')
  mainSwiper.autoplay.stop();
}
}); 

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".video_con01 " , {

    scrollTrigger: {
      trigger: ".guides",
      start: "top",
      // end: "center top",
      scrub: 3,

    },

    y:'-150px'
  });
  
  gsap.to(".video_con03 " , {

    scrollTrigger: {
      trigger: ".guides",
      start: "top",
      // end: "center top",
      scrub: 3,
    },

    y:'150px'
  });



  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".business",
      start: "top +=800",
      end:"+=900",
      scrub: 3,
      stagger: .1,
      pasued: true,
    }
  });
  tl.fromTo(".business .title", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".business .box", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".business .animation-btn", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".news .title", {opacity: 0, y:"10%"},{opacity: 1, y:0})
  .fromTo(".news_list li", {opacity: 0, y:"10%"},{opacity: 1, y:0})
 



  function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
  };
  numberCounter.prototype.counter = function() {
    var self = this;
    this.diff = this.target_count - this.count;
     
    if(this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }
     
    this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //정규식 ,와같은것
     
    if(this.count < this.target_count) {
        this.timer = setTimeout(function() { self.counter(); }, 20); //초단위 
    } else {
        clearTimeout(this.timer);
    }
  };

  numflag = 0;

  $(window).on("scroll", function() {
    curr = $(window).scrollTop();
    works = $('.business').offset().top-$(window).height()/2 ;

    if (curr > works){
      //숫자 카운트
      if(numflag == 0){
        new numberCounter("num01", 456);
        new numberCounter("num02", 24.7);
        new numberCounter("num03", 1);
        new numberCounter("num04", 54);
        numflag =1;
      }
    }

    // if(curr > history){
    //   history.play();
    // }
});



 

});
