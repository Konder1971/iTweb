(function ($) {
  $(document).ready(function () {
	  
		if(isMac()){
			$('body').addClass('mac');
		}else if(isiOS()){
			$('body').addClass('ios');
		}else if(isWindows()){
			$('body').addClass('windows');
		}

		$(window).scroll(function () { // добавление класса при скролле
			if ($(window).scrollTop() > 0) {
				$('.top').addClass('fixedTop');
			} else {
				$('.top').removeClass('fixedTop');
			}
		});

		$('.nav-toggle').click(function () { // BAR BURGER
			if ($('.nav-toggle').hasClass('active')) {
				$('.nav-toggle.active').removeClass('active');
			}
			else {
				$('.nav-toggle').addClass('active');
			}
		});

		// resize imp
		$('.photo').css('height', '');
		$('.photo').css({
			height: $('.photo').width() / 1.77 + 'px'
		});
		$(window).resize(function () {
			$('.photo').css('height', '');
			$('.photo').css({
				height: $('.photo').width() / 1.77 + 'px'
			});
		});

  });
  

	
	function isMac() {
	  return navigator.platform.indexOf('Mac') > -1
	}

	function isWindows() {
	  return navigator.platform.indexOf('Win') > -1
	}

	function isiOS(){
		return /(iPhone|iPod|iPad)/i.test(navigator.platform) && !window.MSStream;
	}
  
  
})(jQuery);


// добавдение класса при скролле
// window.onscroll = function () {
//   myFunctionscroll()
// }
// function myFunctionscroll () {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.querySelector('.top').className = 'top fixed'
//   } else {
//     document.querySelector('.top').className = 'top'
//   }
// }

