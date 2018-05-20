function total(arr) {
    return arr.reduce((total, sum) => total + sum)
}

console.log(total([1,2,3]))

function total(arr){
arr.reduce(function(total, amount){
    return total + amount
});
}

console.log(total(1,2,3))

// function isFourLetters(arr) {
//     return arr.filter(function(str) {
//       return str.length === 5;
//     });
//   }
//    console.log(isFourLetters(['dare', 'wordl', 'jfsdjkfjskflsd', 'darn', 'idom']))

  