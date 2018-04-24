// DROPDOWN TOGGLING FOR CUB SCHOOL PAGE
$(".package-list").on("click", function(){
	$(this).children(".package-dropdown").slideToggle();
});

// MAKE ENTIRE DIV ON HOMEPAGE CLICKABLE
$(".item").on("click", function(){
	window.location.href = $(this).find("a").attr("href");
});