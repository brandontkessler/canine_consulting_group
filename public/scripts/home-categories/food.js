(function(code){
	code(window.jQuery, window, document);
}(function($, window, document){
	$(function(){
		// The DOM is ready
	});

	const locationURL = {
		petSmart: 'http://www.petsmart.com',
		petco: 'http://www.petco.com',
		costco: 'http://www.costco.com',
		walmart: 'http://www.walmart.com',
		chewy: 'http://www.chewy.com',
		target: 'http://www.target.com',
		jet: 'http://www.jet.com',
		petflow: 'http://www.petflow.com'
	}

	const foodCompanyObject = {
		authority: {
			locations: [ 'petSmart' ],
			locDOM: $('#authority'),
			lifestages: true,
			size: true,
			wet: false
		},
		eukanuba: {
			locations: [ 'petSmart', 'chewy', 'petco' ],
			locDOM: $('#eukanuba'),
			lifestages: true,
			size: false,
			wet: true
		},
		kirkland: {
			locations: [ 'costco' ],
			locDOM: $('#kirkland'),
			lifestages: false,
			size: false,
			wet: true
		},
		nutro: {
			locations: [ 'petSmart', 'petco', 'chewy' ],
			locDOM: $('#nutro'),
			lifestages: true,
			size: true,
			wet: true
		},
		rachael: {
			locations: [ 'chewy', 'target', 'petSmart', 'walmart' ],
			locDOM: $('#rachael'),
			lifestages: false,
			size: true,
			wet: true
		},
		wellness: {
			locations: [ 'petco', 'petSmart' ],
			locDOM: $('#wellness'),
			lifestages: true,
			size: true,
			wet: true
		},
		merrick: {
			locations: [ 'petco', 'jet', 'chewy' ],
			locDOM: $('#merrick'),
			lifestages: true,
			size: true,
			wet: true
		},
		nulo: {
			locations: [ 'petSmart', 'petflow' ],
			locDOM: $('#nulo'),
			lifestages: true,
			size: true,
			wet: true
		},
		simply: {
			locations: [ 'petSmart' ],
			locDOM: $('#simply'),
			lifestages: true,
			size: false,
			wet: true
		},
		natures: {
			locations: [ 'petSmart', 'petco' ],
			locDOM: $('#natures'),
			lifestages: false,
			size: false,
			wet: true
		},
		taste: {
			locations: [ 'petco', 'chewy' ],
			locDOM: $('#taste'),
			lifestages: true,
			size: false,
			wet: true
		},
		acana: {
			locations: [ 'petflow', 'chewy' ],
			locDOM: $('#acana'),
			lifestages: true,
			size: false,
			wet: false
		},
		orijen: {
			locations: [ 'chewy', 'petflow' ],
			locDOM: $('#orijen'),
			lifestages: true,
			size: false,
			wet: false
		}
	}

// ***************************************** ADDING LOCATIONS *********************************
	let idArray = Object.keys(foodCompanyObject);
	
	idArray.forEach(function(id){
		let idLocations = foodCompanyObject[id].locations;
		let idDOM = foodCompanyObject[id].locDOM;
		let locationList = "";

		idLocations.forEach(function(location){
			let upperLocation = firstUpper(location);
			locationList += '<a href="' + locationURL[location] + '" target="_blank">' + upperLocation + '</a> | '
		});
		// Slice off the last pipe
		let finalList = locationList.slice(0, -2);
		idDOM.append(finalList)
	});

	function firstUpper(word){
		return word.charAt(0).toUpperCase() + word.slice(1)
	}

// ***************************************** ADDING FOOD ICONS *********************************
	const foodArray = Object.keys(foodCompanyObject).map(i => foodCompanyObject[i]);

	foodArray.forEach(function(brand){
		let foodContainer = brand.locDOM.parent().children('.food-icon-container');
		let foodIconsList = "";
		if(brand.lifestages){
			foodIconsList += '<img class="food-icon" src="https://i.imgur.com/OzrZVMx.png">'
		}
		if(brand.size){
			foodIconsList += '<img class="food-icon" src="https://i.imgur.com/nADXQw4.png">'
		}
		if(brand.wet){
			foodIconsList += '<img class="food-icon" src="https://i.imgur.com/h3s71F0.png">'
		}

		foodContainer.append(foodIconsList);
	})


// ********************************* DISPLAYING CORRECT CATEGORIES *********************************
	const foodContent = {
		'Less than $40': {
			tab: $('#tab-less-40'),
			content: $('#content-less-40')
		},
		'$40 - $60': {
			tab: $('#tab-40-60'),
			content: $('#content-40-60')
		},
		'$60 - $80': {
			tab: $('#tab-60-80'),
			content: $('#content-60-80')
		},
		'Raw': {
			tab: $('#tab-raw'),
			content: $('#content-raw')
		},
		'Freeze Dried': {
			tab: $('#tab-freeze-dried'),
			content: $('#content-freeze-dried')
		}
	}

	let tabArray = $.map(foodContent, function(keys, values){
		return keys.tab;
	});
	let contentArray = $.map(foodContent, function(keys, values){
		return keys.content;
	});

	tabArray.forEach(function(tab){
		tab.on('click', function(){
			contentArray.forEach(function(content){
				content.css("display", "none")
			});

			let thisTab = $(this)[0].innerText;
			foodContent[thisTab].content.fadeToggle('fast');
		})
	})

// less40.on('click', function(){
// 	less40content.css("display", "block")
// })

}))
