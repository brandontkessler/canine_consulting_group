const 	mongoose = require("mongoose"),
		passportLocalMongoose = require("passport-local-mongoose");

let UserSchema = new mongoose.Schema({
	name: String,
	username: String,
	password: String,
	pets: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Pet"
		}
	]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);