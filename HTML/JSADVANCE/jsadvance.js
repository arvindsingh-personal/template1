// Design an HTML page to take the employee details as input from the user and display them according to the given format attached.
function Add() {
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
        this.Id = Id;
        this.Name = Name;
        this.Salary = Salary;
    }
}
 
let emp1 = new Employee(1,"John",8000);
let tr = "<tr><th>ID</th><th>Name</th><th>Total Salary</th></tr>" + 
         "<tr><td>"+emp.Id+"</td><td>"+emp.Name+"</td><td>"+emp.Salary+"</td></tr>"
document.getElementById('table2').innerHTML = tr;
let emp2 = new Employee(2,"Mark",9000);
let emp3 = new Employee(3,"Yash",7000);

// Use 'this' keyword to display the employee details (stored in JSON array) on the HTML page.
let json = '{"employees":[' +
           '{"ID":"'+emp1.Id+'","Name":"'+emp1.Name+'","Salary":"'+emp1.Salary+'"},'+
           '{"ID":"'+emp2.Id+'","Name":"'+emp2.Name+'","Salary":"'+emp2.Salary+'"},'+
           '{"ID":"'+emp3.Id+'","Name":"'+emp3.Name+'","Salary":"'+emp3.Salary+'"}]}';