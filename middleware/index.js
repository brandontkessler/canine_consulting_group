const 	User = require("../models/user"),
		Pet = require("../models/pet");

let middlewareObject = {};

middlewareObject.isNotLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		console.log("You're already logged into an account");
		res.redirect("/login");
	} else {
		return next();
	}
}

middlewareObject.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	console.log("You cannot do that.");
	res.redirect("/login");
};

middlewareObject.isProfileOwner = function(req, res, next){
	if(req.user._id.equals(req.params.id)){
		return next();
	}
	console.log("That's not your profile");
	res.redirect("/profile/" + req.user._id);
}

// middlewareObject.isPetOwner = function(req, res, next){
// 	Pet.findById(req.params.petId, function(err, foundPet){
// 		console.log(foundPet.owner.id);
// 		if(err){
// 			console.log(err);
// 			res.redirect("/profile/" + req.user.id);
// 		} else {
// 			if(foundPet.owner.id.equals(req.user._id)){
// 				return next();
// 			};
// 			console.log("Something went wrong");
// 			res.redirect("/profile/" + req.user._id);
// 		}
// 	});
// 	console.log("That pet doesn't exist");
// 	res.redirect("/profile/" + req.user.id);
// }


module.exports = middlewareObject;