let images = [
	"http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-1.jpg",
	"https://www.what-dog.net/Images/faces2/scroll000.jpg",
	"https://pbs.twimg.com/profile_images/846146544072101888/0sLpdiu1_400x400.jpg",
	"https://static-cdn.jtvnw.net/jtv_user_pictures/hsdogdog-profile_image-5550ade194780dfc-300x300.jpeg",
	"https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782",
	"http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg",
	"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs",
	"https://www.dogzhealth.com/wp-content/uploads/beagle.jpg"
]

let squares = $(".square");

for(let i=0; i<squares.length; i++){
	squares[i].style.backgroundImage = 'url(' + images[i] + ')';
}

$('.square').mouseover(function(){
	$(this).addClass("active");
});

$('.square').mouseout(function(){
	$(this).removeClass("active");
});