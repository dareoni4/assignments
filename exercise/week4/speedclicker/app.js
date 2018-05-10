var click = document.getElementById('click')
var display = dou

var count = localStorage.count;
display.textContent = count

click.addEventListener('click', counter);



localStorage.removeItem(key)

function counter(){
    if(!localStorage.count){
        localStorage.count = 0
    }
    localStorage.count++
    display.textContent = localStorage.count
}