const 	express = require("express"),
		router = express.Router(),
		passport = require("passport"),
		middleware = require("../middleware"),
		User = require("../models/user");


router.get("/profile/:id", middleware.isLoggedIn, middleware.isProfileOwner, function(req, res){
	User.findById(req.user._id).populate("pets").exec(function(err, user){
		res.render("profiles", { user: user });
	});
});

module.exports = router;
