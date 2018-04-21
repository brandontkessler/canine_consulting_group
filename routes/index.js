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


module.exports = router;
