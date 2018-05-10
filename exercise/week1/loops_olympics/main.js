
for ( var i = 0; i < 10; i++){
    console.log(i);
}



for (var i = 9; i > 0; i--)(
    console.log(i)
)

var fruit = ["banana", "orange", "apple", "kiwi"];
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}


var number = []; //empty array
// i starts from 0,  i(0) is less than 10, then i++ it counts up 1,2,3 etc
for(var i = 0; i < 10; i++ ){
    //push adds element to array and push adds i(0) buy one
    number.push(i);
}
console.log(number);



var fruits = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(var i = 1; i < fruit.length; i += 2){
    fruits.push(fruit[i]);
}
console.log(fruits);

var candy = []
var sweets = ['skittles', 'snickers', 'twix', 'payday','mentos']
for(var j = 0; i< sweets.length; i++){
    candy.push(sweets[i]);
}