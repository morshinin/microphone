$(document).ready(function(){
	// Testimonial slider init
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Slicknav
	$('.pageNav').slicknav();

	// Call button
	setTimeout(function() {
     $("#call-but-m1").show();
    }, 20000);


	    // $("body").append('<div id="call-but-m1"></div>');


	    
	    var callObj='<div class="call-m1-pulse-one"></div><div class="call-m1-pulse-two"></div><div class="call-cont-m1" id="call-hover-m1"><div class="call-cont-m1-front"></div><div class="call-cont-m1-back">Бесплатный звонок</div></div>'
	    $('#call-but-m1').html(callObj);
	    
	    flip=function(){
	        $('#call-hover-m1').toggleClass('spinner-m1');
	    }
	    var timerId=setInterval(flip,3000);
	    
	    $('#call-but-m1').hover(
	        function(){
	            if($('#call-hover-m1').hasClass('spinner-m1') != true){
	                $('#call-hover-m1').addClass('spinner-m1');
	            };
	            clearInterval(timerId);
	        },
	        function(){
	          $('#call-hover-m1').removeClass('spinner-m1');
	          timerId=setInterval(flip,3000);
	          
	    });
	// Flip counter 
	var clock;

	clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        language: 'ru',
        autoStart: false,
        callbacks: {
        	stop: function() {
        		$('.message').html('The clock has stopped!')
        	}
        }
    });
		    
    clock.setTime(220880);
    clock.setCountdown(true);
    clock.start();
});
// Variant
const variantRadio = document.querySelectorAll('input[name=micColor]'),
			mic = document.querySelectorAll('.micContour')

function checkMic(mic, color) {
	mic.forEach(mic => {
			mic.classList.remove('micContour_active')
		if (mic.classList.contains('micContour_' + color)){
			mic.classList.add('micContour_active')
		}
	})
}

variantRadio.forEach(variant => {
	variant.addEventListener('change', e => {
		switch (e.target.id) {
			case 'micBlack':
				checkMic(mic, 'black')
				break
			case 'micRed':
				checkMic(mic, 'red')
				break
			case 'micGold':
				checkMic(mic, 'gold')
				break
			case 'micWhite':
				checkMic(mic, 'white')
				break
			default:
				break
		}
	})
})

