const 	express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mongoose = require("mongoose"),
		passport = require("passport"),
		LocalStrategy = require("passport-local"),
		methodOverride = require("method-override"),
		User = require("./models/user");

require("dotenv").config();

// Required Routes
const	indexRoutes = require("./routes/index"),
		profileRoutes = require("./routes/profiles"),
		petProfileRoutes = require("./routes/pet-profiles")

mongoose.connect("mongodb://localhost/canine");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


// Passport Configuration
app.use(require("express-session")(
	{
		secret: process.env.SECRET_HASH,
		resave: false,
		saveUninitialized: false
	}
));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

// Routes
app.use(indexRoutes);
app.use(profileRoutes);
app.use(petProfileRoutes);

app.get("*", function(req, res){
	res.render("404");
});

app.listen(3000, 'localhost', function(){
	console.log("Canine Server On");
});