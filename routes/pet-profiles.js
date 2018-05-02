const 	express = require("express"),
		router = express.Router(),
		passport = require("passport"),
		imgur = require("imgur"),
		multer = require("multer"),
		moment = require("moment"),
		fs = require("fs"),
		path = require("path"),
		middleware = require("../middleware"),
		User = require("../models/user"),
		Pet = require("../models/pet");

// Temporary Image Storage System
const storage = multer.diskStorage({
	destination: './tmp',
	filename: function(req, file, cb){
		cb(null, Date.now() + '_' + file.originalname);
	}
});

const upload = multer({
	storage: storage,
	limits: {fileSize: 1000000}, // Limits image size to 1MB
	fileFilter: function(req, file, cb){
		checkFileType(file, cb);
	}
}).single("petImage");

// Checks file types to ensure images only
function checkFileType(file, cb){
	const filetypes = /jpeg|jpg|png|gif/;
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	const mimetype = filetypes.test(file.mimetype);

	if(mimetype && extname){
		return cb(null, true)
	} else {
		cb(console.log("This is not an image"));
	}
}


// Create new Pet Profile
router.get("/profile/:id/pet-profiles/create", middleware.isLoggedIn, middleware.isProfileOwner, function(req, res){
	res.render("pet-profiles/create");
});

router.post("/profile/:id/pet-profiles", middleware.isLoggedIn, middleware.isProfileOwner, function(req, res){
	User.findById(req.user.id, function(err, user){
		if(err){
			console.log(err)
		} else {
			upload(req, res, function(err){
				if(err){
					console.log(err);
					res.render("/profile/:id/pet-profiles/create");
				} else {
					imgur.uploadFile(req.file.path)
						.then(function(json){
							let petImageURL = json.data.link;
							fs.unlink(req.file.path, function(err){
								if(err){
									console.log(err);
									res.redirect("/profile/:id/pet-profiles/create");
								}
							});
							let petInfo = req.body.pet;
							let newPet = new Pet({
								name: petInfo.name,
								nicknames: petInfo.nicknames,
								breed: petInfo.breed,
								age: petInfo.age,
								birthdate: petInfo.birthdate,
								birthPlace: petInfo.birthPlace,
								petImage: petImageURL
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
										res.redirect("/profile/" + req.user._id + "/pet-profiles/" + pet._id);
									});
								});
							});
						})
						.catch(function(err){
							console.log(err);
							res.redirect("/profile/:id/pet-profiles/create")
						});
				}
			});
		}
	});
});

// Get Pet Profile
router.get("/profile/:id/pet-profiles/:petId", middleware.isLoggedIn, middleware.isProfileOwner, middleware.isPetOwner, function(req, res){
	Pet.findById(req.params.petId, function(err, foundPet){
		if(err){
			console.log(err);
			res.redirect("/profile/" + req.user._id);
		} else {
			let date = moment(foundPet.birthdate).format('MMMM-DD-YYYY');
			res.render("pet-profiles", {pet: foundPet, petBirthDate: date});
		}
	});
});

// Post Fun Facts to Database
router.put("/profile/:id/pet-profiles/:petId", middleware.isLoggedIn, middleware.isProfileOwner, middleware.isPetOwner, function(req, res){
	Pet.findByIdAndUpdate(req.params.petId, req.body.pet, function(err, updatedPet){
		if(err){
			console.log(err);
			res.redirect("/profile/" + req.user._id);
		} else {
			res.redirect("/profile/" + req.user._id + "/pet-profiles/" + req.params.petId);
		}
	});
});

// Get Public View of Pet Profile
router.get("/pet-profiles/:petId/view", function(req, res){
	Pet.findById(req.params.petId, function(err, foundPet){
		if(err){
			console.log(err);
			res.redirect("/");
		} else {
			res.render("pet-profiles/pet-view", {pet: foundPet});
		}
	});
});

module.exports = router;
