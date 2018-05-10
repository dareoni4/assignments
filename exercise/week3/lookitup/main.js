// var dictionary = {};

// function addWord (word, define){
//    if( word = word.replace(/([^aeiou])s/,'')){
//    dictionary[word] = define;
//    return dictionary[word]
// }else {
//     return "plural not allowed";
//     }   
// }
// // addWord('dog', 'an animal')
// // addWord('cat', 'feline')


// function lookItUp (word){
// return dictionary[word]
// }

// addWord('happy', 'the feeling of being content')
// ad

// module.exports = {
//     addWord,
//     lookItUp
// }

var dictionary = {};

function addWord (word, define){
    if(!word.match(/([^aiou])s/)) {
        dictionary[word] = define;
        return dictionary[word]
    }else{
        return "plurals not allowed";
    }
}

function lookItUp (word){
    return dictionary[word]
}

addWord('happy', 'the feeling of being content')
addWord('camel', 'a black and white animal');
addWord('camels', 'a black and white animal');
console.log(lookItUp('happy'))

module.exports = {
    addWord,
    lookItUp
}