const 	express = require('express'),
		router = express.Router();

router.get('/', function(req, res){
	res.json({ dogBreed: { "Affenpinscher": { size: "S", group: "Terrier" }, "Afghan Hound": { size: "L", group: "Hound" }, "Airedale Terrier": { size: "M", group: "Terrier" }, "Akita": { size: "L", group: "Working" }, "Alaskan Klee Kai": { size: "S", group: "Working" }, "Alaskan Malamute": { size: "L", group: "Working" }, "American Bulldog": { size: "L", group: "Sporting" }, "American English Coonhound": { size: "L", group: "Hound" }, "American Eskimo Dog": { size: "S", group: "Working" }, "American Foxhound": { size: "L", group: "Hound" }, "American Pit Bull Terrier": { size: "L", group: "Terrier" }, "American Staffordshire Terrier": { size: "M", group: "Terrier" }, "American Water Spaniel": { size: "M", group: "Sporting" }, "Anatolian Shepherd Dog": { size: "L", group: "Working" }, "Appenzeller Sennenhund": { size: "L", group: "Herding" }, "Australian Cattle Dog": { size: "M", group: "Herding" }, "Australian Kelpie": { size: "M", group: "Herding" }, "Australian Shepherd": { size: "M", group: "Herding" }, "Australian Terrier": { size: "S", group: "Terrier" }, "Basenji": { size: "M", group: "Hound" }, "Basset Hound": { size: "M", group: "Hound" }, "Beagle": { size: "M", group: "Hound" }, "Bearded Collie": { size: "M", group: "Herding" }, "Bedlington Terrier": { size: "S", group: "Terrier" }, "Belgian Malinois": { size: "L", group: "Working" }, "Belgian Sheepdog": { size: "L", group: "Herding" }, "Belgian Tervuren": { size: "L", group: "Herding" }, "Berger Picard": { size: "L", group: "Herding" }, "Bernese Mountain Dog": { size: "L", group: "Working" }, "Bichon Frise": { size: "S", group: "Companion" }, "Black and Tan Coonhound": { size: "L", group: "Hound" }, "Bloodhound": { size: "L", group: "Hound" }, "Bluetick Coonhound": { size: "M", group: "Hound" }, "Boerboel": { size: "L", group: "Working" }, "Bolognese": { size: "S", group: "Companion" }, "Border Collie": { size: "M", group: "Herding" }, "Border Terrier": { size: "S", group: "Terrier" }, "Borzoi": { size: "L", group: "Hound" }, "Boston Terrier": { size: "S", group: "Terrier" }, "Bouvier des Flandres": { size: "L", group: "Herding" }, "Boxer": { size: "L", group: "Working" }, "Bracco Italiano": { size: "L", group: "Hound" }, "Briard": { size: "L", group: "Herding" }, "Brittany": { size: "L", group: "Sporting" }, "Brussels Griffon": { size: "S", group: "Terrier" }, "Bull Terrier": { size: "M", group: "Terrier" }, "Bulldog": { size: "M", group: "Working" }, "Bullmastiff": { size: "L", group: "Working" }, "Cairn Terrier": { size: "S", group: "Terrier" }, "Canaan Dog": { size: "M", group: "Herding" }, "Cane Corso": { size: "L", group: "Working" }, "Cardigan Welsh Corgi": { size: "S", group: "Herding" }, "Catahoula Leopard Dog": { size: "L", group: "Hound" }, "Caucasian Shepherd Dog": { size: "L", group: "Working" }, "Cavalier King Charles Spaniel": { size: "M", group: "Companion" }, "Chesapeake Bay Retriever": { size: "L", group: "Sporting" }, "Chihuahua": { size: "S", group: "Companion" }, "Chinese Crested": { size: "S", group: "Companion" }, "Chinese Shar-Pei": { size: "M", group: "Working" }, "Chinook": { size: "L", group: "Working" }, "Chow Chow": { size: "M", group: "Working" }, "Clumber Spaniel": { size: "M", group: "Sporting" }, "Cocker Spaniel": { size: "M", group: "Sporting" }, "Rough Collie": { size: "M", group: "Herding" }, "Coton de Tulear": { size: "S", group: "Companion" }, "Curly-Coated Retriever": { size: "L", group: "Sporting" }, "Dachshund": { size: "S", group: "Hound" }, "Dalmatian": { size: "M", group: "Working" }, "Dandie Dinmont Terrier": { size: "S", group: "Terrier" }, "Doberman Pinscher": { size: "L", group: "Working" }, "Dogo Argentino": { size: "L", group: "Working" }, "Dogue de Bordeaux": { size: "L", group: "Working" }, "Dutch Shepherd": { size: "M", group: "Herding" }, "English Cocker Spaniel": { size: "M", group: "Sporting" }, "English Foxhound": { size: "M", group: "Hound" }, "English Setter": { size: "L", group: "Sporting" }, "English Springer Spaniel": { size: "M", group: "Sporting" }, "Entlebucher Mountain Dog": { size: "L", group: "Herding" }, "Finnish Lapphund": { size: "M", group: "Herding" }, "Finnish Spitz": { size: "M", group: "Working" }, "Flat-Coated Retriever": { size: "L", group: "Sporting" }, "Fox Terrier": { size: "M", group: "Terrier" }, "French Bulldog": { size: "S", group: "Companion" }, "German Pinscher": { size: "M", group: "Working" }, "German Shepherd Dog": { size: "L", group: "Herding" }, "German Shorthaired Pointer": { size: "L", group: "Sporting" }, "German Wirehaired Pointer": { size: "L", group: "Sporting" }, "Giant Schnauzer": { size: "L", group: "Working" }, "Golden Retriever": { size: "L", group: "Sporting" }, "Gordon Setter": { size: "L", group: "Sporting" }, "Great Dane": { size: "L", group: "Working" }, "Great Pyrenees": { size: "L", group: "Working" }, "Greater Swiss Mountain Dog": { size: "L", group: "Working" }, "Greyhound": { size: "L", group: "Hound" }, "Havanese": { size: "S", group: "Companion" }, "Ibizan Hound": { size: "L", group: "Hound" }, "Irish Setter": { size: "L", group: "Sporting" }, "Irish Terrier": { size: "M", group: "Terrier" }, "Irish Water Spaniel": { size: "L", group: "Sporting" }, "Irish Wolfhound": { size: "L", group: "Hound" }, "Italian Greyhound": { size: "S", group: "Hound" }, "Jack Russell Terrier": { size: "S", group: "Terrier" }, "Japanese Chin": { size: "S", group: "Companion" }, "Korean Jindo Dog": { size: "L", group: "Working" }, "Keeshond": { size: "M", group: "Working" }, "Kerry Blue Terrier": { size: "M", group: "Terrier" }, "Komondor": { size: "L", group: "Working" }, "Kuvasz": { size: "L", group: "Working" }, "Labrador Retriever": { size: "L", group: "Sporting" }, "Lakeland Terrier": { size: "S", group: "Terrier" }, "Lancashire Heeler": { size: "M", group: "Herding" }, "Leonberger": { size: "L", group: "Working" }, "Lhasa Apso": { size: "S", group: "Companion" }, "Lowchen": { size: "S", group: "Companion" }, "Maltese": { size: "S", group: "Companion" }, "Manchester Terrier": { size: "S", group: "Terrier" }, "Mastiff": { size: "L", group: "Working" }, "Miniature Pinscher": { size: "S", group: "Working" }, "Miniature Poodle": { size: "S", group: "Companion" }, "Miniature Schnauzer": { size: "S", group: "Terrier" }, "Mudi": { size: "M", group: "Herding" }, "Neapolitan Mastiff": { size: "L", group: "Working" }, "Newfoundland": { size: "L", group: "Working" }, "Norfolk Terrier": { size: "S", group: "Terrier" }, "Norwegian Elkhound": { size: "M", group: "Hound" }, "Norwich Terrier": { size: "S", group: "Terrier" }, "Nova Scotia Duck Trolling Retriever": { size: "M", group: "Sporting" }, "Old English Sheepdog": { size: "L", group: "Herding" }, "Papillon": { size: "S", group: "Companion" }, "Pekingese": { size: "S", group: "Companion" }, "Pembroke Welsh Corgi": { size: "S", group: "Herding" }, "Petit Basset Griffon Vendeen": { size: "S", group: "Hound" }, "Pharaoh Hound": { size: "M", group: "Hound" }, "Plott": { size: "M", group: "Hound" }, "Pointer": { size: "L", group: "Sporting" }, "Polish Lowland Sheepdog": { size: "M", group: "Herding" }, "Pomeranian": { size: "S", group: "Companion" }, "Portuguese Water Dog": { size: "M", group: "Sporting" }, "Pug": { size: "S", group: "Companion" }, "Puli": { size: "S", group: "Herding" }, "Rat Terrier": { size: "S", group: "Terrier" }, "Rhodesian Ridgeback": { size: "L", group: "Hound" }, "Rottweiler": { size: "L", group: "Working" }, "Saint Bernard": { size: "L", group: "Working" }, "Saluki": { size: "L", group: "Hound" }, "Samoyed": { size: "M", group: "Working" }, "Schipperke": { size: "S", group: "Working" }, "Scottish Deerhound": { size: "L", group: "Hound" }, "Scottish Terrier": { size: "S", group: "Terrier" }, "Sealyham Terrier": { size: "S", group: "Terrier" }, "Shetland Sheepdog": { size: "M", group: "Herding" }, "Shiba Inu": { size: "S", group: "Hound" }, "Shih Tzu": { size: "S", group: "Companion" }, "Siberian Husky": { size: "M", group: "Working" }, "Silky Terrier": { size: "S", group: "Terrier" }, "Skye Terrier": { size: "M", group: "Terrier" }, "Small Munsterlander Pointer": { size: "M", group: "Hound" }, "Soft Coated Wheaten Terrier": { size: "M", group: "Terrier" }, "Staffordshire Bull Terrier": { size: "M", group: "Terrier" }, "Standard Poodle": { size: "L", group: "Working" }, "Standard Schnauzer": { size: "M", group: "Working" }, "Sussex Spaniel": { size: "M", group: "Sporting" }, "Swedish Vallhund": { size: "M", group: "Herding" }, "Tibetan Mastiff": { size: "L", group: "Working" }, "Tibetan Spaniel": { size: "S", group: "Companion" }, "Tibetan Terrier": { size: "S", group: "Terrier" }, "Toy Fox Terrier": { size: "S", group: "Terrier" }, "Toy Poodle": { size: "S", group: "Companion" }, "Treeing Tennessee Brindle": { size: "M", group: "Hound" }, "Treeing Walker Coonhound": { size: "L", group: "Hound" }, "Vizsla": { size: "L", group: "Sporting" }, "Weimaraner": { size: "L", group: "Sporting" }, "Welsh Terrier": { size: "S", group: "Terrier" }, "West Highland White Terrier": { size: "S", group: "Terrier" }, "Whippet": { size: "M", group: "Hound" }, "Wirehaired Pointing Griffon": { size: "M", group: "Sporting" }, "Xoloitzcuintli": { size: "M", group: "Working" }, "Yorkshire Terrier": { size: "S", group: "Terrier" }} });
});

module.exports = router;