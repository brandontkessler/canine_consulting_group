// DROPDOWN TOGGLING FOR CUB SCHOOL PAGE
$(".package-list").on("click", function(){
	$(this).children(".package-dropdown").slideToggle();
});

// MAKE ENTIRE DIV ON HOMEPAGE CLICKABLE
$(".item").on("click", function(){
	window.location.href = $(this).find("a").attr("href");
});

// MAKE HEIGHT OF PET PROFILE IMAGE = WIDTH
let imgWidth = $(".pet-profile-pic").width();
$(".pet-profile-pic").css({'height': imgWidth+'px'});

// RESIZE IMAGE ON WINDOW RESIZE
$(window).resize(function() {
	let imgWidth = $(".pet-profile-pic").width();
	$(".pet-profile-pic").css({'height': imgWidth+'px'});
});
