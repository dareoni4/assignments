// function totalCoins (num1, num2, num3){
//   var x = num1 * 5;
//   var y = num2  * 7;
//   var z = num3 * 11;
//   return x + y + z;
// }
document.baddies.addEventListener("submit",function(e){
    e.preventDefault();

    var goombas = document.baddies.goomba.value * 5;
    var bombs = document.baddies.bobbombs.value * 7;
    var cheep = document.baddies.cheeps.value * 11;
    
    
    var sum = goombas + bombs + cheep;
    var total = document.getElementById("sum1");
    
    total.textContent = sum;
    console.log(sum)
})

