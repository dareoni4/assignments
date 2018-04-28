var readlineSync = require('readline-sync');

  options = ['put hand in hole', 'find the key', 'open the door'],
  index = readlineSync.keyInSelect(options, 'Which one?');
console.log('Ok, ' + options[index]);
if(0){
  console.log("your dead")
}else if(1){
  console.log("they can  open the door")
}else{
  console.log("they cant open the door unless they find the key")
}