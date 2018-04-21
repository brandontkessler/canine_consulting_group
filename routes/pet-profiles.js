const 	express = require("express"),
		router = express.Router(),
		passport = require("passport"),
		middleware = require("../middleware"),
		User = require("../models/user"),
		Pet = require("../models/pet");

// Create new Pet Profile
router.get("/profile/:id/pet-profiles/create", middleware.isLoggedIn, middleware.isProfileOwner, function(req, res){
	res.render("pet-profiles/create");
});

router.post("/profile/:id/pet-profiles", middleware.isLoggedIn, middleware.isProfileOwner, function(req, res){
	User.findById(req.user.id, function(err, user){
		if(err){
			console.log(err)
		} else {
				let newPet = new Pet({
					name: req.body.pet.name,
					petType: req.body.pet.petType,
					age: req.body.pet.age,
					birthdate: req.body.pet.birthdate,
					gender: req.body.pet.gender
				});
				Pet.create(newPet, function(err, pet){
					if(err){
						console.log(err);
						return res.redirect("back");
					}
					pet.owner.id = req.user._id;
					pet.save(function(err){
						user.pets.push(pet);
						user.save(function(err){
							res.redirect("/profile/" + req.user._id);
						});
					});
				});
		}
	});
});

// Get Pet Profile
router.get("/profile/:id/pet-profiles/:petId", middleware.isLoggedIn, middleware.isProfileOwner, function(req, res){
	Pet.findById(req.params.petId, function(err, pet){
		if(err){
			console.log(err);
			res.redirect("/profile/" + req.user._id)
		} else {
			res.render("pet-profiles", { pet: pet });
		}
	});
});



module.exports = router;
