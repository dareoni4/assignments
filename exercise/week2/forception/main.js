var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var list = []
for (var i = 0; i < people.length; i++ ){
    // console.log(people[i])
    list.push(people[i])
    for(j = 0; j < alphabet.length; j++){
        // console.log(alphabet[j])
        list.push(alphabet[j])
    }
}
console.log(list)