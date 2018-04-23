const 	express = require("express"),
		router = express.Router(),
		passport = require("passport"),
		imgur = require("imgur"),
		multer = require("multer"),
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
								petType: petInfo.petType,
								age: petInfo.age,
								birthdate: petInfo.birthdate,
								gender: petInfo.gender,
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
			res.redirect("/profile/" + req.user._id)
		} else {
			res.render("pet-profiles", {pet: foundPet});
		}
	});
});



module.exports = router;
