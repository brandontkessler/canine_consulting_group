(function(code){
	code(window.jQuery, window, document);
}(function($, window, document){
	$(function(){
		// The DOM is ready
	});

// ********************************* DISPLAYING CORRECT CATEGORIES *********************************
	const puppyContent = {
		'Looking for Puppy': {
			tab: $('#looking-for-puppy'),
			content: $('#content-looking-puppy')
		},
		'Have a Puppy': {
			tab: $('#have-a-puppy'),
			content: $('#content-have-puppy')
		}
	}

	let tabArray = $.map(puppyContent, function(keys, values){
		return keys.tab;
	});
	let contentArray = $.map(puppyContent, function(keys, values){
		return keys.content;
	});

	tabArray.forEach(function(tab){
		tab.on('click', function(){
			contentArray.forEach(function(content){
				content.css("display", "none")
			});

			let thisTab = $(this)[0].innerText;
			puppyContent[thisTab].content.fadeToggle('fast');
		})
	})

}))