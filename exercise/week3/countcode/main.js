function countCode(string) {
var count = 0;
for(var i = 0; i< string; i++){
    if(string[i] === 'c' && string[i +1] === 'o' && string[i + 3] === 'e'){
                count++;
            }
        }
        return count;
    }




function countCode(string){
    var myArr = string.split('')
    return myArr.reduce(function(final, letters, i){


}, 0)
}


