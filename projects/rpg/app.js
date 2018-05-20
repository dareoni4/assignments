
var readline = require('readline-sync')
// var isAlive = true;


// function Player (name, strengths, age){
//     this.name = name;
//     this.strengths = strengths;
//     this.age = age;
//     this.heatlh = 100;
// }

// // function Enemy (name, hp){
// //     this.name = name;
// //     this.hp = hp;
// // }

// var playerName = readline.question('Hello, what would you like to name your character? ');
// var powers = ['fire', 'ice', 'psychic', 'power']
// var index = readline.keyInSelect(powers, 'Choose your strength');
// var character = new Player(playerName,powers[index] , );
// console.log('welcome to the game ' + playerName);


// while(isAlive){



// options = ['walk to dungeon', 'walk to forest','walk to castle'];
// index = readline.keyInSelect(options, 'where do you want to walk to')
// console.log('ok, you have chose to ' +  options[index])


// if(options[index] === options[0]){
//     enemyAttack()
    
//     console.log('walk again')
// }else if(options[index] === options[1]){
//     enemyAttack()
    
//     console.log('retrieve the magic potion')
// }else if(options[index] === [2]){
//     enemyAttack()
// console.log('try and sneak in ')}
// else('you beat the level')  





// // var answer = readline.keyInYN("do you want to attack")

// // if(answer === 'y'){
// //     console.log(2)
// // }

// attacks = ['fire', 'ice', 'psychic','power'],
// index = readline.keyInSelect(attacks, 'attack the enemy')


// if(index === 0){
//     console.log('you just blasted')
   
// }else if(index === 1){
//     console.log('you just freezed')
// }else if(index === 2){
//     console.log('you hypnotized him')
// }else if(index === 3){
//     console.log('power wont work the monster is too powerful')
// }
// console.log('   ')
// console.log('please continue..............')

// }



// // function run(){
// //     console.log('you just ranaway')
// //     character.heatlh--
// //     console.log(`your health is now ${character.heatlh}`)
// // }




// function fight(){
//     console.log('you fought')
// }




// function enemyAttack(){
//     if (character.hp > 0){
//         var enemies = ['Goblin', 'Orc', 'Dragon', 'Water Demon']

// var chance = Math.floor(Math.random() * 4) + 1
//     if(chance === 0){
//         var goblin = new Enemy(enemies[chance], 50)
//         console.log(`The ${goblin.name} just appeared, it has ${goblin.hp} hp remaining`)
//         var action = ['run', 'fight']
//         var i = readline.keyInSelect(action, "Do you want to run or fight")
//         if(action[i] === "run"){
//             run()
//         }else if(action[i] === 'fight'){
//             fight()
//         }

//     }else if(chance === 1){
//         var orc = new Enemy(enemies[chance], 50)
//         console.log(`The ${orc.name} just appeared, it has ${orc.hp} hp remaining`)
//         var action = ['run', 'fight']
//         var i = readline.keyInSelect(action, "Do you want to run or fight")
//         if(action[i] === "run"){
//             run()
//         }else if(action[i] === 'fight'){
//             fight()
//         }

//     }else if(chance === 2){
//         var dragon = new Enemy(enemies[chance], 50)
//         console.log(`The ${dragon.name} just appeared, it has ${dragon.hp} hp remaining`)
//         var action = ['run', 'fight']
//         var i = readline.keyInSelect(action, "Do you want to run or fight")
//         if(action[i] === "run"){
//             run()
//         }else if(action[i] === 'fight'){
//             fight()
//         }

//     }else if(chance === 3){
//         var waterDemon = new Enemy(enemies[chance], 50)
//         console.log(`The ${waterDemon.name} just appeared, it has ${waterDemon.hp} hp remaining`)
//         var action = ['run', 'fight']
//         var i = readline.keyInSelect(action, "Do you want to run or fight")
//         if(action[i] === "run"){
//             run()
//         }else if(action[i] === 'fight'){
//             fight()
//         }
//     }

//     }else {
//         isAlive = false;
//         console.log('you died')
//     }
// }

// console.log(enemyAttack());



























var readline = require('readline-sync');
var name = readline.question('hello warrior what is your name ');
var enemies = ['goblin', 'orc', 'Dragon', 'goblin'];
var items = ['potion', 'herb','ruppee', 'arrows','magic'];

var journey = function() {
	var player = this;
    var enemy;
    

	var anyEnemy = function() {
		var random = Math.floor(Math.random() * ((enemies.length - 1) - 0 + 1)) + 0;
		enemy = enemies[random];
		return enemy;
    };
    var loseItems = function(){
        var ri = Math.floor(Math.random() * items.length);
        console.log(' you just lost an item: ' + items[ri])
        items.splice(items.indexOf(items[ri]),1)
    }
    


	this.user = name;
	this.userIsActive = true;
	this.userHp = 100;
	this.enemyHp = 100;
	this.enemyIsActive = null;
    this.enemyCount = 1;
    

	this.userAction = function() {
		var action = readline.question('What do you want to do?, enter "r" to run or "a" to attack: ').toLowerCase();
		var userAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);

       
		switch(action) {
			case 'r':
                player.userIsActive = false;
                player.userHp -= 3
				console.log('your a coward you know ' +  enemy + '\n your a loser.');
                console.log(`               ░░░░░░░░░░░█████████████
                                            ░░░░░░░░░███░███░░░░░░██
                                            ███░░░░░██░░░░██░██████████
                                            ████████░░░░░░████░░░░░░░██
                                            ████░░░░░░░░░░██░░██████████
                                            ████░░░░░░░░░░░███░░░░░░░░░██
                                            ████░░░░░░░░░░░██░░██████████
                                            ████░░░░░░░░░░░░████░░░░░░░░█
                                            ████░░░░░░░░░░░░░███░░████░░█
                                            █████████░░░░░░░░░░████░░░░░█
                                            ███░░░░░██░░░░░░░░░░░░░█████
                                            ░░░░░░░░░███░░░░░░░██████
                                            ░░░░░░░░░░░██░░░░░░██
                                            ░░░░░░░░░░░░███░░░░░██
                                            ░░░░░░░░░░░░░░██░░░░██
                                            ░░░░░░░░░░░░░░░███░░░██
                                            ░░░░░░░░░░░░░░░░░██░░░█
                                            ░░░░░░░░░░░░░░░░░░█░░░█
                                            ░░░░░░░░░░░░░░░░░░██░██
                                            ░░░░░░░░░░░░░░░░░░░███
                                                                    `)
                                                                         
			case 'a':
				player.enemyHp -= userAttackPower;
				console.log('You just attacked ' + enemy + ' for ' + userAttackPower + ' attack power');
				break;
			default:
				console.log('Please enter a valid key');
		}

    };






    
	this.enemyAction = function() {
		if(player.userIsActive === true && player.enemyHp > 0) {
			var enemyAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);
			player.userHp -= enemyAttackPower;
			console.log(enemy + ' just attacked you for ' +  enemyAttackPower + ' attack power');
            loseItems()
			if(player.userHp <= 0) {
				player.userIsActive = false;
                console.log(enemy + ' has killed ' + player.user + '\nyou have just died the evil wizard will rule the land');
                console.log('            ');
                console.log(`                                       _________uu$$$$$$$$$$$$$$$$$uu__________
                                _________u$$$$$$$$$$$$$$$$$$$$$u_________
                                ________u$$$$$$$$$$$$$$$$$$$$$$$u________
                                _______u$$$$$$$$$$$$$$$$$$$$$$$$$u_______
                                _______u$$$$$$$$$$$$$$$$$$$$$$$$$u_______
                                _______u$$$$$$”___”$$$”___”$$$$$$u________
                                _______”$$$$”______u$u_______$$$$”________
                                ________$$$———u$u_______u$$$________
                                ________$$$u______u$$$u______u$$$________
                                _________”$$$$uu$$$___$$$uu$$$$”_________
                                __________”$$$$$$$”___”$$$$$$$”__________
                                ____________u$$$$$$$u$$$$$$$u____________
                                _____________u$”$”$”$”$”$”$u______________
                                __uuu________$$u$_$_$_$_$u$$_______uuu__
                                _u$$$$________$$$$$u$u$u$$$_______u$$$$_
                                __$$$$$uu______”$$$$$$$$$”_____uu$$$$$$__
                                u$$$$$$$$$$$uu____”"”"”____uuuu$$$$$$$$$$
                                $$$$”"”$$$$$$$$$$uuu___uu$$$$$$$$$”"”$$$”
                                _”"”______”"$$$$$$$$$$$uu_”"$”"”___________
                                ___________uuuu_”"$$$$$$$$$$uuu___________
                                __u$$$uuu$$$$$$$$$uu_”"$$$$$$$$$$$uuu$$$__
                                __$$$$$$$$$$”"”"___________”"$$$$$$$$$$$”__
                                ___”$$$$$”______________________”"$$$$”"__
                                          
                                                      `)

			}

		} else if (player.enemyHp <= 0) {
			player.enemyIsActive = false;
            player.enemyCount++;
            player.userHp++;
            console.log(player.user + ' has killed ' + enemy + 'and has lost an item');
            console.log(player.user + " health is " + player.userHp)
		}
	};

	this.restoreEnemy =  function() {
		player.enemyIsActive = true;
		player.enemyHp = 50;
	};

	this.processAttack = function() {
		if(player.enemyIsActive) {
			while(player.enemyHp > 0 && player.userIsActive === true) {
				player.userAction();
				player.enemyAction();
			}
		}
	};

       function print(){
           player.userHp++;
           console.log('your health is  ' + player.userHp)
       }


	this.initialize = function() {
		player.enemyIsActive = true;
        
            var walkOrPrint = readline.keyIn('Press w to walk or p for print inventory ');
        switch(walkOrPrint){
            case 'w':
                player.userIsActive = true
                console.log('keep walking')
                player.enemyAction()
            player.processAttack()                
                
            case 'p':
                console.log('your inventory is as included ' + items + ' and your health is ' + player.userHp)
        
        
        }
       
            
		
        


		while(player.enemyIsActive === false && player.enemyCount <= enemies.length) {
            console.log('blam');
            console.log('    ')
            readline.keyIn('Press any key to walk: ');
            console.log('                ')
			anyEnemy();
            console.log('Walking......');
            
            console.log('wow a ' + enemy + ' has just appeared');
            console.log(`             `)
			player.restoreEnemy();
            player.processAttack();
            player.userAction();
            

		if (player.enemyIsActive === false) {
            console.log(player.user + ' a true warrior of the realm');
            console.log(`
                        /¯¯\
                        \__/
                        ||
                        ||
                        |  |
                        |  |
                        |  |
                        |  |
                        |  |
                        |  |
                    .--.----.--.
                .-----\__/-----.
            ___---¯¯////¯¯|\/|¯¯\\\\¯¯---___
            /¯¯ __O_--////   |  |   \\\\--_O__ ¯¯\
            | O?¯      ¯¯¯    |  |    ¯¯¯      ¯?O | 
            |  '    _.-.      |  |      .-._    '  |
            |O|    ?..?      ./  \.      ?..?    |O|
            | |     '?. .-.  | /\ |  .-. .?'     | |
            | ---__  ¯?__?  /|\¯¯/|\  ?__?¯  __--- |
            |O     \         ||\/ |         /     O|
            |       \  /¯?_  ||   |  _?¯\  /       |
            |       / /    - ||   | -    \ \       |
            |O   __/  | __   ||   |   __ |  \__   O|
            | ---     |/  -_/||   |\_-  \|     --- | 
            |O|            \ ||   | /            |O|  
            \ '              ||   |              ' /
            \O\    _-¯?.    ||   |    .?¯-_    /O/
            \ \  /  /¯¯¯?  ||   |  ?¯¯¯\  \  / /
            \O\/   |      ||   |      |   \/O/
            \     |      ||   |      |     /
            '.O  |_     ||   |     _|  O.'
            '._O'.__/||   |\__.'O_.'
                '._ O ||   | O _.'
                    '._||   |_.'
                    ||   |
                    ||   |
                    | \/ |
                    |  | |
                        \ |/
                        \/
`           )
        }
    
    }

}
	this.initialize();
};

journey();


















