var health = 100;
var readline = require('readline-sync');


while (health > 0){
    var choice = readline.question("would you like to walk? ")
    if (choice === "yes"){
        walk();
    } else {
        print();
    }
}

function walk(){
    console.log("you are walking")

}

function print(){
    health--
    console.log("Your health is: " + health)
}

