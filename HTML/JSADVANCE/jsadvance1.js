const id = "4";
const name = "Jesse";
const salary  = 10000;

export {id, name, salary};

function debug() {
    console.warn("Salary can not be zero");
}
let jsonArray = '{"employees":[' +
           '{"id":"1","name":"John","salary":"12000"},'+
           '{"id":"2","name":"Jesse","salary":"1000"},'+
           '{"id":"3","name":"Jimmy","salary":"0"}]}';

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

for(let key in obj['employees']) {
    if(key.salary <= 0){
        debug();
    }
}