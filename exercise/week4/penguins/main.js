class Party {
    constructor(groups, population){
        this.groupName = groups;
        this.population = population;
    }
}

const penguins = new Party('Penguins', 1000000)
const communists = new Party('Communists', 1000000)

console.log(penguins)
console.log(communists)

// let ranDom = Math.floor((Math.random() * 3))
    
function flipCoin(){
    var coin = Math.floor(Math.random() * 2) === 1 ? 'heads' : 'tails'
    if(coin === 'heads'){
        console.log("penguins attack first")
    }else{
        console.log("communist attack first")
    }
}
console.log(flipCoin())


function onHit(party){
var hit = Math.random(Math.floor())
console.log('the attack on the opponent' + penguins.groupName)
}


function onMiss(party){
console.log("the opponent missed his target")
}
console.log(onHit())



function sendNuke(party, onHit, onMiss){
let chance = Math.floor(Math.random() * 2)
if(chance === 0){
    onhit(party)
}else
 onMiss(party)
    // party just got attacked

// if party got hit successfully or unsucessfully
//
}
sendNuke(penguins, onHit, OnMiss)
// const sendNuke = (party, onHit, onMiss) => 