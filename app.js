const 	express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mongoose = require("mongoose"),
		passport = require("passport"),
		LocalStrategy = require("passport-local"),
		methodOverride = require("method-override"),
		User = require("./models/user");

const port = process.env.PORT || 3000;

require("dotenv").config();

// Required Routes
const	indexRoutes = require("./routes/index"),
		profileRoutes = require("./routes/profiles"),
		petProfileRoutes = require("./routes/pet-profiles"),
		apiRoutes = require("./routes/apis");


const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost/canine";
mongoose.connect(mongoUrl);
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
app.use('/api/dogs', apiRoutes);

app.get("*", function(req, res){
	res.render("404");
});


app.listen(port , function(){
	console.log("Canine Server On: " + port);
});