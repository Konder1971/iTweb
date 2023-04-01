(function ($) {
	if (isMac()) {
		$('body').addClass('mac');
	} else if (isiOS()) {
		$('body').addClass('ios');
	}

	$('.nav-toggle').click(function () {
		if ($('.nav-toggle').hasClass('active')) {
			$('.nav-toggle.active').removeClass('active');
			$('.navigations.active').removeClass('active');
			$('.navLink.active').removeClass('active');
		}
		else {
			$('.nav-toggle').addClass('active');
			$('.navigations').addClass('active');
		}
	});


	let parent = document.querySelectorAll('.navLink')
	//let linkdown = document.querySelectorAll('.dropdown')
	if($(window).width() < 1024) {
		for(let i=0; i < parent.length; i++) {
		  parent[i].onclick = function(e) {
		  e.preventDefault()
		  if( parent[i].classList.contains('active') ) {
			parent[i].classList.remove('active')
		  } else {
			  for(let i=0; i < parent.length; i++) {
				parent[i].classList.remove('active')
			  }
			  parent[i].classList.add('active')
			}
		  }
		}
	} else {
		for(let i=0; i < parent.length; i++) {
			parent[i].onclick = function(e) {
				return true;
			};
			parent[i].classList.remove('active')
		}
	};
	$(window).resize(function() {
		if($(window).width() < 1024) {
			for(let i=0; i < parent.length; i++) {
				parent[i].onclick = function(e) {
				e.preventDefault()
				if( parent[i].classList.contains('active') ) {
					parent[i].classList.remove('active')
				} else {
						for(let i=0; i < parent.length; i++) {
							parent[i].classList.remove('active')
						}
						parent[i].classList.add('active')
					}
				}
			}
		} else {
			for(let i=0; i < parent.length; i++) {
				parent[i].onclick = function(e) {
					return true;
				};
				parent[i].classList.remove('active')
			}
		};
	});


/*
	$(window).on("load", function() {
		$('.ourteamPopap').css('height', '');
		$('.ourteamPopap').css({
			minHeight: $('body').outerHeight(true) + 'px'
		});
	});
	$(window).resize(function () {
		$('.ourteamPopap').css('height', '');
		$('.ourteamPopap').css({
			minHeight: $('body').outerHeight(true) + 'px'
		});
	});
*/
	// popup .ourteam.photo
	$('.ourteam .photo').css('height', '');
	$('.ourteam .photo').css({
		height: $('.ourteam .photo').width() + 'px'
	});
	$(window).resize(function () {
		$('.ourteam .photo').css('height', '');
		$('.ourteam .photo').css({
			height: $('.ourteam .photo').width() + 'px'
		});
	});

	$('.ourteamPopap .photo').css('height', '');
	$('.ourteamPopap .photo').css({
		height: $('.ourteamPopap .photo').width() + 'px'
	});
	$(window).resize(function () {
		$('.ourteamPopap .photo').css('height', '');
		$('.ourteamPopap .photo').css({
			height: $('.ourteamPopap .photo').width() + 'px'
		});
	});


	$('.personDetails').click(function () {
		//document.body.style.cssText += `overflow:hidden`;
		var id = $(this).data('id');
		if ($(this).find('.photo').hasClass('boardAdvisors-photo')) {
			$('.ourteamPopap .photo').addClass('boardAdvisors-photo');
		} else {
			$('.ourteamPopap .photo.boardAdvisors-photo').removeClass('boardAdvisors-photo');
		}
		$('.fonPopap').addClass('active');
		$('.popup'+id).addClass('active');
		return false;
	});
	$('.ourteamPopap .close').click(function () {
		//document.body.style.cssText = `overflow: auto;`;
		$('.fonPopap.active').removeClass('active');
		$('.ourteamPopap.active').removeClass('active');
		return false;
	});

    if($(".select").length > 0){
		$(".select").selectmenu();
	}

	/*
	$(window).scroll(function () {
		if($('body').hasClass('home')){
			var headerShift = $('.header').height()+50;
			var bodyPadding = $('body').css('padding-top');
			if ($(this).scrollTop() > headerShift) {
				$('.header').addClass('homeFixed');
				$('body').css('padding-top', bodyPadding*1+headerShift*1);
			} else {
				$('.header').removeClass('homeFixed');
			}
		}
	});
	*/


	function isMac() {
		return navigator.platform.indexOf('Mac') > -1
	}
	function isWindows() {
		return navigator.platform.indexOf('Win') > -1
	}
	function isiOS() {
		return /(iPhone|iPod|iPad)/i.test(navigator.platform) && !window.MSStream;
	}

})(jQuery);




