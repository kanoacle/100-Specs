/*jshint esversion: 6*/

let unicorn = null;

let videogame_system = 'Atari';

let sahara_animal = 'The Addax';

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

let galilean_moons = ['Io', 'Europa', 'Ganymede', 'Callisto'];

let golden_ratio = 1.61803398874;

let earths_water_composition = 0.71;

let club_name = 'Fight Club';

let gender = {
  female: 'female',
  male: 'male',
  unknown: undefined
};

let princess_leia = {
  name: 'Leia Organa',
  money: 890,
  age: 20,
  gender: gender.female
};

let domains = {
  'ycombinator.com': '198.41.190.47',
  'laughingsquid.com': '162.159.247.97',
  'slumlordhosting.com': '198.61.179.126',
  'jsonformatter.curiousconcept.com': '104.28.5.70'
};

let browsers = {
  Chromium: 'google.com',
  Safari: 'apple.com',
  Opera: 'opera.com',
  Firefox: 'mozilla.org',
  Sleipnir: 'fenrir-inc.com',
  Konqueror: 'konqueror.org'
};

let rainbow = {
  colors: {
    red: '#F0280A',
    orange: '#FF8800',
    yellow: '#FFDD00',
    green: '#51AB0C',
    blue: '#1593ED',
    indigo: '#5215ED',
    violet: '#A915ED'
  },
  isDouble: true
};

let linuxFlavors = ['Gentoo', 'Fedora', 'Debian', 'Slackware', 'Red Hat', 'Bieber Linux'];

let DNA = ['nucleatides', 'guanine', 'adenine', 'thymine', 'cytosine'];

let laptopCosts = {
  MacBook: 1500,
  Alienware: 2500,
  HP: 499,
  Surface: 320
};

let livingOrganismClassification = ['Kingdom','Phylum','Class','Order','Family','Genus','Species'];

let scmList = ['git', 'svn', 'mercurial', 'bazaar', 'cvs'];

let beers = {
  IPA: 'Ale',
  Lager: 'Strong',
  Heffeweisen: 'German',
  Stout: ['Thick', 'Dark'],
  Porter: 'Bitter',
  Ale: ['Light', 'Golden']
};

let sahara_river = () => {
  return 'Nile River';
};

let addNumbers = (a, b) => {
  return a + b;
};

let installLinux = (linux) => {
  if (linuxFlavors.indexOf(linux) >= 0) {
    return true;
  } else {
    return false;
  }
};

let drink = (beer) => {
  if (beers.hasOwnProperty(beer) === false) {
    return false;
  } else if (Array.isArray(beers[beer]) === true) {
    return `This ${beer} is ${beers[beer][0]} and ${beers[beer][1]}.`;
  } else {
    return `This ${beer} is ${beers[beer]}.`;
  }
};

let browseURL = (url) => {
  if (browsers.hasOwnProperty(url)) {
    return `${browsers[url]}`;
  } else {
    return false;
  }
};

let listLivingOrgClass = () => {
  let contain = document.createElement('div');
  let classes = document.createElement('ul');
  for (var i = 0; i < livingOrganismClassification.length; i++) {
    let item = document.createElement('li');
    item.innerHTML = livingOrganismClassification[i];
    contain.appendChild(classes);
    classes.appendChild(item);
  }
  return contain.innerHTML;
};

let favoritePlanet = (planet) => {
  if (planets.indexOf(planet) < 0) {
    return `${planet} is not a planet!`;
  } else {
    let newPlanet = planets[Math.floor(Math.random() * (planets.length - 0))];
    return `I'm from ${planet}, but I wish I could go to ${newPlanet}.`;
  }
};

class Person {
  constructor (name, money, age, gender) {
    this.name = name;
    this.money = money;
    this.age = age;
    this.gender = gender;
  }
  spendMoney (money) {
    this.money -= money;
  }
  earnMoney (money) {
    this.money += money;
  }
}

let purchaseLaptop = (laptop) => {
  if (laptopCosts.hasOwnProperty(laptop)) {
    return laptopCosts[laptop].toString();
  } else {
    return -1;
  }
};

let canTalkAbout = (club) => {
  if (club === club_name) {
    return false;
  } else {
    return true;
  }
};

class Pen {
  constructor (color) {
    this.color = color;
  }
  write (message) {
    return `${this.color}: ${message}`;
  }
}

class Garden {
  constructor (plantsTotal) {
    this.plantsTotal = plantsTotal;
    this.isWatered = false;
  }
  water () {
    this.isWatered = true;
  }
  grow () {
    if (this.isWatered === true) {
      this.plantsTotal++;
    } else {
      return false;
    }
  }
}

class SolarSystem {
  constructor () {
    this.planets = [];
  }
  addPlanet () {
    this.planets.push(planets[Math.floor(Math.random() * (planets.length - 0))]);
  }
  removePlanet () {
    this.planets.pop();
  }
}

class PrincessLeia extends Person {
  constructor (name, money, age, gender) {
    super(name, money, age, gender);
    this.isInTrouble = null;
  }
  shootsGun () {
    this.isInTrouble = false;
    return `Leia shoots her gun wildly`;
  }
  getsInTrouble () {
    this.isInTrouble = true;
    return `Help me Obi-wan Kenobi, you're my only hope`;
  }
  marries (love) {
    if (love === `Luke Skywalker`) {
      return `Gross!`;
    } else if (love === `Han Solo`) {
      return true;
    } else {
      return false;
    }
  }
}
/* Step 33
 *
 * Define an ES5 class named "PrincessLeia" that is a subclass of "Person"
 * with properties "name," "money," "age," "gender," and
 * "isInTrouble"(initialized as null)
 *
 * Add a method "shootsGun" that returns a message
 * "Leia shoots her gun wildly"
 * and sets the isInTrouble property to FALSE
 *
 * Add a method "getsInTrouble" that returns a message
 * "Help me Obi-wan Kenobi, you're my only hope"
 * and sets the property 'isInTroube' to TRUE
 *
 * Add a method "marries" that takes a prospective
 * love interest and returns true for "Han Solo" or false for anyone
 * else.
 *
 * In the 'marries' method - Add a message of disapproval for "Luke Skywalker"
 * "Gross!"
 *
 *
 * class
 *   PrincessLeia
 * properties
 *   isInTrouble
 * methods
 *   shootsGun
 *   getsInTrouble
 *   marries
 *
 */


/* Step 34
 *
 * Define an ES5 class named "Stapler" with properties "color"
 * and "maxPapers". Add a method "staplePapers" that accepts a
 * number of papers as a parameter and returns true if the
 * papers are less than or equal to the papers and false
 * if there are too many papers to staple.
 *
 * class
 *   Stapler
 * properties
 *   color
 *   maxPapers
 * methods
 *   staplePapers
 *
 */


/* Step 35
 *
 * Define an ES5 class named "Scientist" that extends the Person Class that takes
 * name, money, age, and gender as well as new instance properties
 * "disciplines" and "discoveries" which initializes as empty arrays.
 *
 * Add a method named 'addDiscipline' that takes a string as an argument and
 * adds it to the discipline property. Return the value of the discipline property
 *
 * Add a method named 'checkDisciple' that takes a string as an argument and
 * checks if the argument can be found in the discipline property. Return false
 * if it is not found otherwise return back true.
 *
 * Add a method named 'addDiscovery' that takes a string as an argument and
 * adds it to the discoveries property. Return back the contents of the discoveries
 * property as a String made up of all the elements found see below
 *
 * examples:
 * ["Gravity"] will be returned as:
 * "I discovered Gravity."
 *
 * ["Gravity", "Theory of Relativity"] will be returned as:
 * "I discovered Gravity and Theory of Relativity."
 *
 * ["Gravity", "Theory of Relativity", "Jesus Christ"] will be returned as:
 *       "I discovered Gravity, Theory of Relativity, and Jesus Christ."
 *
 * class
 *   Scientist
 * properties
 *   disciplines
 *   discoveries
 * methods
 *   addDiscipline
 *   checkDiscipline
 *   addDiscovery
 *
 */


/* Step 36
 *
 * Define an ES5 class named "BankAccount" that has properties
 * "balance" and "owner." Add a method "withdraw" that allows
 * the owner to remove money from the account and add it to
 * their Person object, "deposit" that lets a Person spend
 * money to increase their balance, and "rob" that allows
 * any Person object to take money from the bank account.
 *
 * class
 *   BankAccount
 * properties
 *   balance
 *   owner
 * methods
 *   withdraw
 *   deposit
 *   rob
 *
 */


/* Step 37
 *
 * WIP
 * PacMan
 *  x
 *  y
 *  north()
 *  south()
 *  east()
 *  west()
 *  getPosition()
 *
 *
 */


/* Step 38
 *
 * WIP
 * beer
 *  temperature 50
 *  volume 12
 *  dispense()
 *  getVolume()
 *
 */


/* Step 39
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 40
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 41
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 42
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 43
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 44
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 45
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 46
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 47
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 48
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/* Step 49
 *
 * WIP
 * cow
 *   poops : 0
 *   milks : 0
 *   eat() poops += quantity / 10
 *   drink() milks += volume *.9
 *
 */


/**
 * Define a Classes
 */

/**
 * Step 50
 *
 * Animal class
 * @param {string} species The animal species
 * @param {string} gender  male or female
 */


/**
 * Step 51
 *
 * Vehicle class
 * @param {string} make The vehicle's make
 * @param {string} model The vehicle's model
 */


/**
 * Step 52
 *
 * Shape class
 * @param {number} sides The number of sides, should be a number
 * greater or equal to 3, if the number is less than 3 then set the
 * value of the sides property to null.
 *
 */


/**
 * Step 53
 *
 * Box class
 * @param {anything} contents The contents of the box
 * @param {boolean} isOpen     Whether the box is opened or closed
 */


/**
 * Step 54
 *
 * Door class
 * @param {boolean} isOpen Whether the door is opened or closed
 */


/**
 * Step 55
 *
 * Shoe class
 * @param {number} size  The shoe size
 * @param {string} color The shoe color
 */


/**
 * Step 56
 *
 * House class
 * @param {number} stories How many stories tall the house is
 */


/**
 * Step 57
 *
 * Lightbulb class
 * @param {boolean} isOn Whether the light is on or off
 */


/**
 * Step 58
 *
 * Cookie class
 * @param {string} flavor The cookie's flavor
 */


/**
 * Step 59
 *
 * Meal class
 * @param {Array} foods All the foods in the meal
 */


/**
 * Create a new instance of the Classes you defined above, below!
 * Steps 60-80 (each variable is a 'step')
 */


// Create 2 different species of animals
var george;
var nemo;

// Create 2 different vehicles
var civic;
var forte;

// Create 2 shapes with different numbers of sides
var square;
var hexagon;

// Create 2 boxes
var catBox;
var christmasPresent;

// Create 2 doors
var automaticDoor;
var bankVault;

// Create 2 shoes
var rubySlippers;
var dressShoes;

// Create 2 houses
var singleStory;
var twoStory;

// Create 2 lightbulbs
var incandescent;
var halogen;

// Create 2 cookies of different flavors
var chocolateChip;
var gingerbread;

// Create 2 different meals
var breakfast;
var dinner;


 /* Steps 81 to 90
 *
 * Create methods
 *
 */


/* Step 81
 *
 * Declare an Animal method called isWarmBlooded that returns
 * a true if the animal species is warm-blooded, false if cold-blooded.
 * Three species are provided below.  If the species is anything else,
 * return the string indicated below.
 *
 *            this.species =>
 *                "Fish"   => false
 *                "Monkey" => true
 *                "Bird"   => true
 *       Any other species => "Could not determine if warm-blooded"
 *
 */


/* Step 82
 *
 * Declare a Vehicle method called drive that accepts a parameter
 * called streetName.  If streetName is a string and is not empty,
 * return "Driving on {streetName}", else return "Driving forward".
 *
 */


 /* Step 83
 *
 * Declare a Shape method called getType that returns a string
 * containing the type of shape based on the sides property.
 *
 *       this.sides =>
 *                3 => "triangle"
 *                4 => "quadrilateral"
 *                5 => "pentagon"
 *                6 => "hexagon"
 *                7 => "heptagon"
 *                8 => "octagon"
 *                9 => "nonagon"
 *               10 => "decagon"
 * Any other number => "Could not determine type"
 *
 */


/* Step 84
 *
 * Declare a Box method called openBox that opens the box
 * if it is already closed.
 * But it should not close the box if it is already open.
 * Return true if openBox opens the box, false otherwise.
 *
 */


 /* Step 85
 *
 * Declare a Door method called openClose that opens the door
 * if it is already closed, or closes the door if it is already open.
 * Return true if openClose opens the door, false if openClose closes the door.
 *
 */


/* Step 86
 *
 * Declare a Shoe method called findShoes that returns a string containing
 * the color and size of the shoe ("Found red shoes of size 7").
 *
 */


 /* Step 87
 *
 * Declare a House method called isATallStory that accepts a
 * param number called storiesTooTall.
 * If the house's stories property is greater than or equal to
 * storiesTooTall, return true, else return false.
 *
 */


 /* Step 88
 *
 * Declare a Lightbulb method called flipSwitch that accepts a
 * param string called on.  If on is the string "on", set
 * the isOn property to true.  If on is any other string,
 * set isOn to false.
 * Return true if isOn is true, false otherwise.
 *
 */


 /* Step 89
 *
 * Declare a Cookie method called swipedByCookieMonster that accepts
 * a param called dayOfTheWeek.  If the cookie's flavor is "chocolate"
 * and the dayOfTheWeek is "Monday", return true.  Else return false.
 *
 */


 /* Step 90
 *
 * Declare a Meal method called containsJunkFood that returns true if
 * at least one of the items in the foods array is junk food, false otherwise.
 * To check if the food item is junk food, create an array called
 * junkFood containing the following strings: "chips", "soda", "ice cream",
 * "popcorn", and "candy".
 *
 * Use Array's indexOf method to check if the foods array contains junk food.
 * Note that if an element is not found in the array, indexOf returns -1.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *
 */


 /* Steps 91 to 100
 *
 * Call methods
 *
 */


/* Step 91
 *
 * Call the isWarmBlooded method on three Animal instances
 * and assign the values to each variable below.
 *
 */
var warmBloodedAnimal;
var coldBloodedAnimal;
var notWarmOrColdAnimal;


/* Step 92
 *
 * Call the drive method on two Vehicle instances
 * and assign the values to each variable below.
 *
 */
var streetDriving;
var forwardDriving;


 /* Step 93
 *
 * Call the getType method on two Shape instances
 * and assign the values to each variable below.
 *
 */
var decagon;
var polygon;


/* Step 94
 *
 * Call the openBox method on two Box instances
 * and assign the values to each variable below.
 *
 */
var openAClosedBox;
var closeAnOpenBox;


 /* Step 95
 *
 * Call the openClose method on two Door instances
 * and assign the values to each variable below.
 *
 */
var openAClosedDoor;
var closeAnOpenDoor;


/* Step 96
 *
 * Call the findShoes method on two Shoe instances
 * and assign the values to each variable below.
 *
 */
var redShoesSize7;
var blackShoesSize10;


 /* Step 97
 *
 * Call the isATallStory method on two House instances
 * and assign the values to each variable below.
 *
 */
var farTooTallAStory;
var shortStory;


 /* Step 98
 *
 * Call the switch method on two Lightbulb instances
 * and assign the values to each variable below.
 *
 */
var kitchenLightsOn;
var porchLightsOff;


 /* Step 99
 *
 * Call the swipedByCookieMonster method on two Cookie instances
 * and assign the values to each variable below.
 *
 */
var cookieMonsterPwns;
var cookieMonsterBlocked;


 /* Step 100
 *
 * Call the containsJunkFood method on two Meal instances
 * and assign the values to each variable below.
 *
 */
var badForYou;
var goodForYou;
