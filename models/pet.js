const 	mongoose = require("mongoose");

let PetSchema = new mongoose.Schema({
	name: String,
	petType: String,
	age: Number,
	birthdate: Date,
	gender: String,
	owner: {
		id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "User"
		}
	}
});


module.exports = mongoose.model("Pet", PetSchema);