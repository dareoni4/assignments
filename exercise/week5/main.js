const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

filterDatabase({}, database);  
   return database.filter(entry => 
object.keys(query). every(key => entry[key] === query[key])
   )
filterDatabase({dolphin: "squeak!"}, database);  
    

filterDatabase({firstName: "Jack", age: 2}, database);  
    //returns 
[
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jack", lastName: "White", age: 2}
]

function filterDatabase(query, database) {
    return database.filter(entry => {
        for (let prop in query) {
            if (entry[prop] !== query[prop]) {
                return false;
            }
            return true;
        }
    });
}