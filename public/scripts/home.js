// SEE MORE BUTTON ON HOMEPAGE
$(document).ready(function(){
	const wendyHeight = $('#wendy-info').height(),
		  brandonHeight = $('#brandon-info').height(),
		  erikaHeight = $('#erika-info').height(),
		  moiraHeight = $('#moira-info').height();

	$('#wendy-info, #brandon-info, #erika-info, #moira-info').addClass('teammate-info-content');

	$('#see-more-wendy').on('click', function(){
		let height = $('#wendy-info').height();
		if(height === 60) {
			$('#wendy-info').css({'transition': 'height 0.5s ease-out', 'height': wendyHeight});
			$('#see-more-wendy').text('Read less');
		} else {
			$('#wendy-info').css({'transition': 'height 0.5s ease-out', 'height': '60px'});
			$('#see-more-wendy').text('Read more');
		}
	});

	$('#see-more-brandon').on('click', function(){
		let height = $('#brandon-info').height();
		if(height === 60) {
			$('#brandon-info').css({'transition': 'height 0.5s ease-out', 'height': brandonHeight});
			$('#see-more-brandon').text('Read less');
		} else {
			$('#brandon-info').css({'transition': 'height 0.5s ease-out', 'height': '60px'});
			$('#see-more-brandon').text('Read more');
		}
	});

	$('#see-more-erika').on('click', function(){
		let height = $('#erika-info').height();
		if(height === 60) {
			$('#erika-info').css({'transition': 'height 0.5s ease-out', 'height': erikaHeight});
			$('#see-more-erika').text('Read less');
		} else {
			$('#erika-info').css({'transition': 'height 0.5s ease-out', 'height': '60px'});
			$('#see-more-erika').text('Read more');
		}
	});

	$('#see-more-moira').on('click', function(){
		let height = $('#moira-info').height();
		if(height === 60) {
			$('#moira-info').css({'transition': 'height 0.5s ease-out', 'height': moiraHeight});
			$('#see-more-moira').text('Read less');
		} else {
			$('#moira-info').css({'transition': 'height 0.5s ease-out', 'height': '60px'});
			$('#see-more-moira').text('Read more');
		}
	});
});


// MAKE ENTIRE ITEM DIV ON HOMEPAGE CLICKABLE
$(".item").on("click", function(){
	window.location.href = $(this).find("a").attr("href");
});
