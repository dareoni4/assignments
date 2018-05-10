function fizzBuzz (){
var fizzBuzzArray = [];
for (var i =0;  i<= 100; i++){
    if( i % 3 === 0 && i % 5 === 0){
        fizzBuzzArray.push("fizzbuzz");
    }else if (i % 5 === 0){
        fizzBuzzArray.push("buzz")
    }else if(i % 3 === 0){
        fizzBuzzArray.push('fizz')
    }else{
        fizzBuzzArray.push(i);
    }
}
   return fizzBuzzArray
}

console.log(fizzBuzz());



