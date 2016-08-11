$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	$('select').selectric({
		disableOnMobile: false,
	});

	//$('.select').select2();

	$('.filter-sort').click(function(event) {
		$(this).toggleClass('active');
	});

	$('.tabs li').click(function(event) {
		if (!$(this).hasClass('active')){
			$('.tabs li').removeClass('active');
			$(this).addClass('active');
			$('.services-block').removeClass('active');
			$('.services-block[data-title="' + $(this).attr('data-title') + '"]').addClass('active');
		}
	});

	$('.search-list li').click(function(event) {
    	$('#search').val($(this).text());
    	if (!$(this).hasClass('active')) {
    		$('.search-list ul li').removeClass('active');
    		$(this).addClass('active');
    	} 
    	else {
    		$(this).removeClass('active');
    		$('#recipient-search').val('');
    	}
    });

    $('#search').focus(function(event) {
    	$('.search-list').slideDown(300);
    });
    $('#search').blur(function(event) {
    	$('.search-list').slideUp(300);
    });

	$('#search').keyup(function(event) {
		
    	var str = $(this).val().toLowerCase();
    	if (str == '') {
    		$('.search-list li').removeClass('active')
    	};
    	$('.search-list li').removeClass('active');
    	$('.search-list li').each(function() {
    		var recipientName = $(this).text().toLowerCase().indexOf(str);
    		if (recipientName >= 0) {
    			$(this).show();
    		} 
    		else {
    			$(this).hide();
    		}
    	});
    });

	
	/*function preload(){
		var $this = $('.preload'),
			count = 12,
			deg = 360/count;
		for (var i = 1; i <= count; i++) {
			$this.append('<span class="pre-line line-' + i + '"></span>')
			$('.line-' + i).css({
				'-webkit-transform': 'rotate(0deg) translate(0px, 0px)',
				'-moz-transform': 'rotate(0deg) translate(0px, 0px)',
				'-o-transform': 'rotate(0deg) translate(0px, 0px)',
				'-ms-transform': 'rotate(0deg) translate(0px, 0px)',
				'transform': 'rotate(0deg) translate(0px, 0px)'
			});
		}
	}
	preload();*/

});