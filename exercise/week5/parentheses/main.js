function stringifyUrl(url, query) {  
if (url ){
    return url
}if 
}

const url = "http://localhost:8080/monkeys"  
const query = {  
  color: "black",
  species: "howler"
}

stringifyUrl(url, query)  
//returns "http://localhost:8080/monkeys?color=black&species=howler"