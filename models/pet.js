const 	mongoose = require("mongoose");

let PetSchema = new mongoose.Schema({
	name: String,
	nicknames: String,
	breed: String,
	age: Number,
	birthdate: Date,
	birthPlace: String,
	owner: {
		id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User"
		}
	},
	petImage: [String],
	funFacts: {
		favoriteToys: String,
		favoriteTreats: String,
		bestFriends: String,
		talents: String,
		leastFavoriteThing: String,
		iLoseMyMindWhen: String
	}
});


module.exports = mongoose.model("Pet", PetSchema);