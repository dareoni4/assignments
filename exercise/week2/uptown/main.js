var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

            
            
// function print (lyrics) {
//     console.log(lyrics.join(' , '));
// }
// print(lyrics);

// function backwards(lyrics){
//     console.log(lyrics.reverse());
// }

// backwards(lyrics);

// function other(array){
   
//     for(var i = 0; i < array.length; i += 2){
//         console.log(lyrics[i]);
//     }

//}

// other(lyrics);

function everyOther(array){
    var finalString = '';
//^^ makes a new variable with empty array 
    for(var i = 0; i < array.length; i += 2 ){
    // makes a loop to read through array plus 2 so takes every other array 
        finalString += ' ' + (array[i + 1] + ' ' + array[i])
        // takes new array and 
    }
    return finalString
}

console.log(everyOther(lyrics))