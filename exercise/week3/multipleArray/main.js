

var people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
];  

function sortedOfAge(arr){
var newArr = arr.filter(function(person){
    return people.age > 18
})

var sorted = newArr.sort(function(a, b){
  return a.lastName > b.lastName            
})
return newArr
return sorted
}

console.log(sortedOfAge(people))

function toDisplayInHTML(arr){
  arr = arr.sort( (a, b) => b.age - a.age );
  arr = arr.map( person => `<li>${person.firstName} ${person.lastName} is ${person.age}</li>` );
  return arr;
}

console.log( toDisplayInHTML(people) ); 


toDisplayInHTML(people);  //==> ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]