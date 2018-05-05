(function(code){
	code(window.jQuery, window, document);
}(function($, window, document){
	$(function(){
		// The DOM is ready
	});

	// DROPDOWN TOGGLING FOR CUB SCHOOL PAGE
	$(".package-list").on("click", function(){
		$(this).children(".package-dropdown").slideToggle();
	});

}))
