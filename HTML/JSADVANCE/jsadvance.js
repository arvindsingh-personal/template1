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