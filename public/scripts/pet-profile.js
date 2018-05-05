(function(code){
	code(window.jQuery, window, document);
}(function($, window, document){
	$(function(){
		// The DOM is ready
	});

	let petProfilePic = $(".pet-profile-pic");
	let imgWidth = petProfilePic.width();

	// MAKE HEIGHT OF PET PROFILE IMAGE = WIDTH
	petProfilePic.css({'height': imgWidth+'px'});

	// RESIZE IMAGE ON WINDOW RESIZE
	$(window).resize(function() {
		imgWidth = petProfilePic.width();
		petProfilePic.css({'height': imgWidth+'px'});
	});

	// LOAD DOG BREED SELECTION FROM DOGS API
	$.getJSON('/api/dogs')
		.then(addBreed)

	function addBreed(dogData){
		let breeds = $.map(dogData.dogBreed, function(value, key){
			return key;
		});
		let breedList = "";

		$.each(breeds, function(index, breed){
			breedList += '<option value="' + breed + '">' + breed + '</option>';
		});
		$('#breed-select').append(breedList);
	}

}));

