// Design an HTML page to take the employee details as input from the user and display them according to the given format attached.

// Apply employee name validation (not be empty, not a number). Use try, catch and throw and display the proper error message if any during validation.
"use strict";

function Add() {

    let errorMessage = document.getElementById('error');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    
    const tr = document.createElement('tr');

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const salary = document.getElementById('salary').value;
    const a = document.createElement('a'); 
    a.setAttribute('class','Delete');
    a.setAttribute('href','#');
    a.setAttribute('onclick','Delete(this)');

    try {
        if(name == "" ) throw "Name can not be empty";
        if ( name == Number(name)) throw "Name should be string not a number";
        if(id == "") throw "All fields must be filled";
        if(salary == "") throw "All fields must be filled";
    } catch (error) {
        errorMessage.innerHTML = error;
    }

    const f1 = document.createTextNode(id);
    const f2 = document.createTextNode(name);
    const f3 = document.createTextNode(salary);
    const f4 = document.createTextNode('Delete');

    a.appendChild(f4);
    td1.appendChild(f1);
    td2.appendChild(f2);
    td3.appendChild(f3);
    td4.appendChild(a);

    

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById('table').appendChild(tr);

    document.getElementById('id').value="";
    document.getElementById('name').value="";
    document.getElementById('salary').value="";
}
function Delete(value1) {
   value1.parentElement.parentElement.remove();
}

// Write a class to declare all the details of the employee as mentioned in the above HTML page. Create an object of the class and display it.
class Employee {
    constructor(Id,Name,Salary) {
        this.id = Id;
        this.name = Name;
        this.salary = Salary;
    }
}
 
let emp1 = new Employee(1,"John",8000);
let tr = "<tr><th>ID</th><th>Name</th><th>Total Salary</th></tr>" + 
         "<tr><td>"+emp1.id+"</td><td>"+emp1.name+"</td><td>"+emp1.salary+"</td></tr>"

document.getElementById('table2').innerHTML = tr;
let emp2 = new Employee(2,"Mark",9000);
let emp3 = new Employee(3,"Yash", 7000);

// Use 'this' keyword to display the employee details (stored in JSON array) on the HTML page.

let jsonArray = '{"employees":[' +
           '{"id":"'+emp1.id+'","name":"'+emp1.name+'","salary":"'+emp1.salary+'"},'+
           '{"id":"'+emp2.id+'","name":"'+emp2.name+'","salary":"'+emp2.salary+'"},'+
           '{"id":"'+emp3.id+'","name":"'+emp3.name+'","salary":"'+emp3.salary+'"}]}';

const obj = JSON.parse(jsonArray);
var txt="";


console.log(obj);
// debugger;

// Apply proper error handling (try-catch) and calculate the salary of an employee as salary * 1.10 and display the employee details with updated salary.

function add_li(emp)
{
    console.log(emp);
    const message = document.getElementById('errorPara');

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = emp.id;
    tr.appendChild(td1);
    
    let td2 = document.createElement("td");
    td2.innerText = emp.name;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = emp.salary;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = parseInt(emp.salary * 1.10);
    try {
        if(td4.innerText == "") throw "Enter Salary";
        if(isNaN(td4.innerText)) throw "Enter salary in numbers";
        td4.innerText = Number(td4.innerText);
        tr.appendChild(td4);
        let tb = document.getElementById("table3");
        tb.appendChild(tr);
    } catch (error) {
        message.innerHTML = error;
    }
}

// let tr_str = 
// `<tr>
//     <td>${emp.id}</td>
//     <td>${emp.name}</td>
//     <td>${emp.salary}</td>Apply employee name validation (not be empty, not a number). Use try, catch and throw and display the proper error message if any during validation.
// </tr>`

// let tr_el = $(tr_str);

// $("#table3").append(tr_el);

for (const emp of obj["employees"]) {
    add_li(emp);
}





// Write a JS arrow function to display the employee name and 15% of the salary as output.

var arrowFunction;

 arrowFunction = (val) =>  {
     if(val.salary == Number(val.salary)){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerText = val.name;

    let td2 = document.createElement('td');
    td2.innerText = (val.salary * 15) / 100;

    tr.appendChild(td1);
    } 
 }
for(const emp of obj["employees"]) {
    arrowFunction(emp);
}

// Create a separate JS file with a employee detail and import it to your main HTML/JS code to add and display this employee details in the HTML page.

// import {id, name, salary} from "./jsadvance1.js";
// let text = id + " " + name + " " + salary + ".";
// document.getElementById('importpara').innerHTML = text;

// Change the salary of each employee to 30,000/- with the help of a function in strict mode and display the result.

function  add_updated_salary(emp)
{
    console.log(emp);
    const message = document.getElementById('errorPara');

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = emp.id;
    tr.appendChild(td1);
    
    let td2 = document.createElement("td");
    td2.innerText = emp.name;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = emp.salary;
    tr.appendChild(td3);
    
    
        let tb = document.getElementById("table5");
        tb.appendChild(tr);
    
    
}


for(let key in obj['employees']) {
    obj['employees'][key].salary = 30000;
}

for (const emp of obj["employees"]) {
    add_updated_salary(emp);
}

