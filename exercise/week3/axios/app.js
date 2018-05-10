
var todoUrl = 'https://api.vschool.io/dare/todo/';
var display = document.getElementById('todos')


var data = axios.get(todoUrl).then(function(response){
   displayData(response.data)
})
console.log(document.addTodo)
document.addTodo.addEventListener('submit', function(e){
    e.preventDefault();
    var newTodo = {
        title: document.addTodo.title.value,
        description: document.addTodo.description.value,
        price: document.addTodo.price.value
    }
    console.log(newTodo)
    axios.post(todoUrl, newTodo).then(function(response){
        console.log(response.data)
    })

})


function displayData(arr){
    if(arr.length){
        arr.map(function(todo){
           
            var title = document.createElement('h3');
            title.textContent = todo.title
            var button = document.createElement('button');
            var description = document.createElement('h2');
            description.textContent = todo.description

            var price = document.createElement('h1');
            price.textContent = todo.price;
            var id = document.createElement('p')
            id.textContent = todo._id;
            var image = document.createElement('IMG')//.src = todo.imgUrl
            image.setAttribute("src", todo.imgUrl)
            console.log(image)
            display.appendChild(title);
            display.appendChild(description);
            display.appendChild(price);
            display.appendChild(id)
            display.appendChild(image)
            
        })
    }
}

document.deleteTodo.addEventListener('submit', function(e){
    e.preventDefault();
var getID = document.deleteTodo.todoId.value
axios.delete(todoUrl + getID).then(function(response){
    console.log(response.data)
})
})



























// var group = document.getElementById('list')
// // var lukeSkywalker = axios.get('https://swapi.co/api/people/1');

// // console.log(lukeSkywalker);  
// // function assignResponseToVariable(response){  
// //     console.log(response.data);
// // }
// function getTodos(){
//     axios.get('https://api.vschool.io/dare/todo').then(function(response){
//     // console.log(response.data)
//     var data = response.data
//     var grab = data.map(function(todo){
//         // console.log(todo.description)
//         // console.log(todo.title)
//         // console.log(todo.sessionId)
        
//        var todoTitle = document.createElement("h4")
//        todoTitle.textContent = todo.title
//        group.appendChild(todoTitle)
       
//        var toDoPrice= document.createElement("li")
//         toDoPrice.textContent = todo.price
//         group.appendChild(toDoPrice)
        
//        var describe = document.createElement('li')
//        describe.textContent = todo.description
//        group.appendChild(describe)
//     })
// })
// }

// document.todoForm.addEventListener("submit", function(e){
//     e.preventDefault();
//     // console.log(document.todoForm)
//     // console.log(document.todoForm.description.value)
//     // console.log(document.price.value)
//     // console.log(document.title.value)
//     var newTodo = {
//         title: document.todoForm.title.value,
//         price: document.todoForm.price.value,
//         description: document.todoForm.description.value
//     }
//     axios.post('https://api.vschool.io/dare/todo/', newTodo).then(function(response){  
//         console.log(response.data);
//       })
//     getTodos()
// })



// document.request.addEventListener("submit",function(e){
// e.preventDefault();

// var info = document.request.value




// axios.get('https://api.vschool.io/dare/todo').then(function(response){
//     console.log(response.data)
//     var data = response.data
//     var grab = data.some(function(todo){
//         console.log(todo.description)
//        var todoTitle = document.createElement("h1")
//        todoTitle.textContent = todo.completed
//        group.appendChild(todoTitle)
//     })
// })