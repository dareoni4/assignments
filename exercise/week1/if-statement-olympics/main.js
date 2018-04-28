if(5 > 3){
    console.log("is greater than");
}

if("cat" > 3){
    console.log('is the length');
}

if("cat" === "dog"){
    console.log("not the same");
}else{
    console.log("they are the same");
}
// bronze medel 

var person = {
    name: "Bobby",
    age: 12
}

if(person.age < 18){
    console.log( person.name + " is allowed to go to the movie!");
}else{
    console.log(person.name + " is too young to watch the movie!");
}

if(person.name.includes("B")){
    console.log(person.name + " can enter the theatre");
}else{
    console.log("cannot come in!")
}


// sivler medal 

if ( 1 === "1"){
    console.log("strict")
}else if (1 === "1"){

}else {
    console.log("not equal at all!")
}


