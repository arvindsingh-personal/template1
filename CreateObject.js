let position;
let type;
let available;
let emp = {};
function Position() {
  position = document.getElementById('position').value;
}
function Type() {
  type = document.getElementById('type').value;
}
function Availability() {
  available = document.getElementById('availability').value;
}
function Print() {
  console.log(position + " " + type + " " + available);
  emp = { position: position, type: type, availability: available }
  showDetails();
}

function showDetails() {
  document.getElementById('demo').innerHTML = emp.position + " " + emp.type + " " + emp.availability;
  let Employee = Object.create(emp);
}