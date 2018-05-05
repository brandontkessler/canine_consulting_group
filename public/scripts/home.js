(function(code){
	code(window.jQuery, window, document);
}(function($, window, document){
	$(function(){
		// The DOM is ready
	});

// ************************************* MEET THE TEAM ****************************************

	let wendyInfo = $('#wendy-info'),
		brandonInfo = $('#brandon-info'),
		erikaInfo = $('#erika-info'),
		moiraInfo = $('#moira-info'),
		teammateInfo = $('.teammate-info');
	// on ready, store the initial height of the teammate description
	const wendyHeight = wendyInfo.height(),
		  brandonHeight = brandonInfo.height(),
		  erikaHeight = erikaInfo.height(),
		  moiraHeight = moiraInfo.height(),
		  // Store teammate ID: height as an object
		  teammateObject = {
		  	'wendy-info': {
		  		accessDOM: wendyInfo,
		  		'see-more-wendy': wendyHeight
		  	},
		  	'brandon-info': {
		  		accessDOM: brandonInfo,
		  		'see-more-brandon': brandonHeight
		  	},
		  	'erika-info': {
		  		accessDOM: erikaInfo,
		  		'see-more-erika': erikaHeight
		  	},
			'moira-info': {
				accessDOM: moiraInfo,
				'see-more-moira': moiraHeight
			}
		  };

	let teamArray = [wendyInfo, brandonInfo, erikaInfo, moiraInfo];
	// On ready, add the teammate-info-content class to shrink the description height to 60px lines
	$.each(teamArray, (index, member) => member.addClass('teammate-info-content'));

	teammateInfo.on('click', '.see-more', function(){
		let seeMoreId = $(this).attr('id'),
			thisParentId = $(this).parent().children('p').attr('id'),
			thisParentObj = teammateObject[thisParentId],
			parentDOM = thisParentObj.accessDOM,
			transitionMore = {'transition': 'height 0.5s ease-out', 'height': thisParentObj[seeMoreId]},
			transitionLess = {'transition': 'height 0.5s ease-out', 'height': '60px'};

		if(parentDOM.height() === 60){
			parentDOM.css(transitionMore);
			$(this).text('Read less')
		} else {
			parentDOM.css(transitionLess);
			$(this).text('Read more')
		}
	});

// ************************************* ITEM CLICKS ****************************************
	// MAKE ENTIRE ITEM DIV ON HOMEPAGE CLICKABLE
	$(".item").on("click", function(){
		window.location.href = $(this).find("a").attr("href");
	});

}))
