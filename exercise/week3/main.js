// var readline = require('readline-sync');  
// var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
// var shift = parseInt(readline.question('How many letters would you like to shift? '));  

function ceasarCipher (str, num){
var letters = "abcdefghijklmnopqrstuvwxyz";
var newStr = "";
for(var i = 0; i < str.length; i++){
    if(letters.indexOf(str[i] === -1)){
        newStr += str[i]
    } else{ 
        var position = letters.indexOf(input[i]);
        newStr += letters[position + num];
        }
    }
    return newStr;
}

console.log(ceasarCipher(input, shift))

function largest(num)
// var myArray = [4, 5, 6, 99, 68, 7, 24];
var 
var biggestNum = 0;
for(var i=0; i< myArray.length; i++){
    if(myArray[i] > biggestNum){
        biggestNum = myArray[i];
     }
}
console.log(biggestNum);

//return largest number in array








function phoneNumber(numbers){
    let arr = "(xxx) xxx-xxxx".split('');
    numbers.forEach(n =>{
      arr[arr.indexOf('x')] = n;
    });
  return arr.join('');
  }

  function phoneNumber


  























