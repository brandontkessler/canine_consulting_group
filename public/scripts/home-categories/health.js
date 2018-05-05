// IIFE - Immediately Invoked Function Expression
(function(yourcode) {
// The global jQuery object is passed as a parameter
	yourcode(window.jQuery, window, document);
}(function($, window, document) {
// The $ is now locally scoped 
// Listen for the jQuery ready event on the document
$(function() {
 // The DOM is ready!
});
// The rest of the code goes here!

	let careByListLis = $('#care-by-list').children('li'),
		ageList = $('#age-list'),
		breedList = $('#breed-list'),
		activityList = $('#activity-list'),
		financialList = $('#financial-list'),
		medicalList = $('#medical-list');

	let careByListObject = {
			age: ageList,
			breed: breedList,
			activity: activityList,
			financial: financialList,
			medical: medicalList
		}

	careByListLis.on('click', function(){
		careByListLis.not($(this)).slideToggle();
		let careId = $(this).attr('id');

		careByListObject[careId].slideToggle();		
	});

	let careBySubset =  $('#care-by-subset-list').children('ul').children('li')

	careBySubset.on('click', function(){
		careBySubset.not($(this)).slideToggle();
		let parentId = $(this).parent('ul').attr('id'),
			info = $(this).text();

		if(parentId === "age-list"){
			console.log("age")
		} else if (parentId === "breed-list") {
			if(info === "Brachycephalic"){
				$('#brachycephalic').slideToggle();
			}
		}
	});


}
));
