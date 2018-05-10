const 	express = require("express"),
		router = express.Router(),
		passport = require("passport"),
		middleware = require("../middleware"),
		User = require("../models/user");

// Home Route
router.get("/", function(req, res){
	res.render("home");
});

// Show Registration
router.get("/register", function(req, res){
	res.render("register");
});

router.post("/register", middleware.isNotLoggedIn, function(req, res){
	let newUser = new User({
		name: req.body.name,
		username: req.body.username
	});
	User.register(newUser, req.body.password, function(err, user){
		if (err){
			console.log(err)
			return res.redirect("/register");
		} 
		passport.authenticate("local")(req, res, function(){
			res.redirect("/profile/" + user._id);
		});
	});
});

// Show Login Page
router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login", middleware.isNotLoggedIn, passport.authenticate("local", 
	{
		failureRedirect: "/login"
	}), function(req, res){
		res.redirect("/profile/" + req.user._id);	
});

// Logout
router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});


// Cub School
router.get("/cub-school", function(req, res){
	res.render("home-categories/cub-school");
});

// Health and Wellness
router.get("/health", function(req, res){
	res.render("home-categories/health");
});
router.get("/health/fleas_ticks_heartworms", function(req, res){
	res.render("home-categories/fleas-ticks-heartworms");
});
router.get("/health/allergies", function(req, res){
	res.render("home-categories/allergies");
});
router.get("/health/eyes_ears_teeth", function(req, res){
	res.render("home-categories/eyes-ears-teeth");
});
router.get("/health/vaccinations_dewormers", function(req, res){
	res.render("home-categories/vaccinations-dewormers");
});


// Food
router.get("/food", function(req, res){
	res.render("home-categories/food")
});

// Cub Social
router.get("/cub-social", function(req, res){
	res.render("home-categories/cub-social");
});

// Puppy Town
router.get("/puppytown", function(req, res){
	res.render("home-categories/puppy-town");
});

module.exports = router;
