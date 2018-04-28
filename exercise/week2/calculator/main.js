
// document.words.addEventListener("submit", function(e){
//     e.preventDefault();
//     var noun = document.words.nouns.value
//     var adverb = document.words.adverbs.value
//     var verb = document.words.verbs.value

    // alert(`The ${noun} did ${adverb} ${verb} in it's home`)

//     // console.log(adverb + noun + verb)
// })







document.multiply.addEventListener('submit', multiply)
// document.add.addEventListener('button', add)


function multiply(event){
    event.preventDefault();
    var number1 = document.multiply.mult1.value
    var number2 = document.multiply.mult2.value
    console.log(number1 * number2)
    document.getElementById("result").innerText = parseInt(number1) * parseInt(number2)
}

document.add.addEventListener('submit', add)
function add(event){
    event.preventDefault();
    var n1 = document.add.add1.value
    var n2 = document.add.add2.value
    console.log(n1 + n2)
    document.getElementById("addition").innerText = parseInt(n1) + parseInt(n2)
}


document.subtract.addEventListener("submit", function(sub){
    
    sub.preventDefault();
    var sub1 = document.subtract.sub1.value
    var sub2 = document.subtract.sub2.value
    console.log(sub1 - sub2)
    document.getElementById("subtraction").innerHTML = parseInt(sub1) - parseInt(sub2)
})