function letter (eachLetter){
for (var i = 0; i < eachLetter.length; i ++){
console.log(eachLetter[i])
}
}
letter("hellohoware")



function findChar(str, char){
    var found = false;
    for (var  i = 0; i<str.length && !found; i++){
        if(str[i] === char){
            found = true;
            console.log(i);
        }
        console.log(i)
    }
    if (!found){
        console.log('character not found ')
    }
}

function findChar(str, char){
    var found = false;
    for (var i = 0; i < str.length; i++){
        if(str[i] === char){
            found = true
        }
    }
}


function find42(arr){
    var found = false;
    for(var i = 0; i < arr.length && !found; i++){
        if (arr[i] === 42){
            found = true
        }
    }
    if (!found){
        console.log('42 was not found.')
    }
}

