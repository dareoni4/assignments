document.travel.addEventListener("submit", function(e){  
    e.preventDefault()
var input = document.travel.firstname.value
var input2 = document.travel.lastname.value
var ageInput= document.travel.age.value
var location = document.travel.location.value
var diets = document.travel.restriction.value
console.log('hello')
alert(`your ticket has been processed:
        first name: ${input}
        last name ${input2}
        have fun in ${location}
        `
        
)
})

