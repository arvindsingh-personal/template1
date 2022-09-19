let position;
let type;
let available;
let emp = { position: String, type: String, availability: String };
let eat = { name: String, category: String, avail: String }
let Employee;
let Food;
let keyArray = [];
let valueArray = [];
let name1;
let category;
let avail;
function Position() {
  position = document.getElementById('position').value;
}
function Type() {
  type = document.getElementById('type').value;
}
function Availability() {
  available = document.getElementById('availability').value;
}
//Create the Employee Object
function Create() {
  Employee = Object.create(emp);
  Employee.position = position;
  Employee.type = type;
  Employee.availability = available;
  console.log(Employee);
}
// Prints the Employee Object
function showDetails() {
  document.getElementById('demo').innerHTML = Employee.position + " " + Employee.type + " " + Employee.availability;
}
// Prevent the Employee object from updation
function Freez() {
  Object.freeze(Employee);
}
//Update the Emplpyee Object
function Update() {
  Employee.position = position;
  Employee.type = type;
  Employee.availability = available;
}
//count the number of keys in Employee Object
function printKeys() {
  let num = 0;
  for (const [key, value] of Object.entries(Employee)) {
    num++;
    keyArray.push(key);
    valueArray.push(value);
  }
  document.getElementById('keyNum').append(num);
  displayKey();
  displayValue();
}
//Print the keys of Employee Object
function displayKey() {
  document.getElementById('keys').append(keyArray);
}
//Print the values of Employee Object
function displayValue() {
  document.getElementById('values').append(valueArray);
}
//Print the array containing array of each key-value pair as elements
function printArray() {
  let arr = Object.entries(Employee);
  console.log(arr)
  document.getElementById('demo1').innerHTML = arr;
}

function Name() {
  name1 = document.getElementById('name').value;
}
function Category() {
  category = document.getElementById('category').value;
}
function Available() {
  avail = document.getElementById('available').value;
}
//Crea the Food Object
function Create1() {
  Food = Object.create(eat);
  Food.name = name1;
  Food.category = category;
  Food.avail = avail;
  console.log(Food);
}
//Merges the Food and Employee Objects
function Merge() {
  const mergedObject = Object.assign(Food, Employee);
  console.log(mergedObject);
  let table = '<table border=1><tr><th>Key</th><th>Value</th></tr>';
  for (const [key, value] of Object.entries(mergedObject)) {
    table += `<tr><td>${key}</td><td>${value}</td></tr>`
  }
  table += '</table>';
  document.getElementById('demo2').innerHTML = table;
}