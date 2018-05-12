$(document).ready(function(){
	// Testimonial slider init
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
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
});
// Gift inputs
const giftRadio = document.querySelectorAll('input[name=gift]'),
			pbWrapper = document.querySelector('.giftImageWrapper_pb'),
			hphWrapper = document.querySelector('.giftImageWrapper_hph')

giftRadio.forEach(radio => {
	radio.addEventListener('change', e => {
		switch (e.target.id) {
			case 'powerBank':
					pbWrapper.classList.add('giftImage_pb_cord_active')
					hphWrapper.classList.remove('giftImage_hph_cord_active')
				break
			case 'headphones':
			pbWrapper.classList.remove('giftImage_pb_cord_active')
			hphWrapper.classList.add('giftImage_hph_cord_active')
				break
			default:
				break
		}
	})
})
