function parsePokemon() { 
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonPokeMon = xhr.responseText;
        var data = JSON.parse(jsonPokeMon);
        // document.getElementById('name').innerHTML = data.objects[0].pokemon[i].name
        // console.log(data.objects[0].pokemon[1])
        for(var i = 0; i <data.objects[0].pokemon.length; i++){
            var a = '<ul>',
            var b = '</ul>'
            document.getElementById('name').innerHTML +=("   " + data.objects[0].pokemon[i].name )
        }
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();

}

parsePokemon();





// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {  
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var jsonData = xhr.responseText;
//         var data = JSON.parse(jsonData);
//         document.getElementById('name').innerHTML = data.name
//     }
// };

// xhr.open("GET", "https://swapi.co/api/people/1/", true);  
// xhr.send();