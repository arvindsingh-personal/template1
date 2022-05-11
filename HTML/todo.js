function add() {
    var data = document.getElementById('new-task').value;
  if(data != ""){
    var li = document.createElement('li');
    var check = document.createElement('input');
    check.type = "checkbox";
    check.setAttribute('class', 'accept')
    check.setAttribute('onclick', "checkforvalue(this)");
    
     var label = document.createElement('label');
     var editButton = document.createElement('button');
     editButton.setAttribute('class', 'edit')
     editButton.setAttribute('onclick', "editeThis(this)");

     var deleteButton = document.createElement('button');
     deleteButton.setAttribute('class', 'delete');
     deleteButton.setAttribute('onclick', 'Delete(this)');

     var labelTag = document.createTextNode(data);
     var editTag = document.createTextNode('Edit');
     var deleteTag =document.createTextNode('Delete');

     label.appendChild(labelTag);
     editButton.appendChild(editTag);
     deleteButton.appendChild(deleteTag);

     li.appendChild(check);
     li.appendChild(label);
     li.appendChild(editButton);
     li.appendChild(deleteButton);
     
     document.getElementById('incomplete-tasks').appendChild(li);
     document.getElementById('new-task').value = "";

     if(document.getElementById('add-update-button').innerHTML == 'Update') {
         document.getElementById('add-update-button').innerHTML = 'Add';
     }
}
}
 function checkforvalue(value1) {
     const checked = document.querySelector('.accept:checked') != null;
     console.log(checked);
     if(value1.checked) {
       var row = value1.parentElement;
       document.getElementById('completed-tasks').appendChild(row);
     }
     else {
         var row = value1.parentElement;
         document.getElementById('incomplete-tasks').appendChild(row);
     }

 }

 function editeThis(value1) {
     const checked = document.querySelector('.accept:checked') != null;
     
        document.getElementById('new-task').value = value1.previousElementSibling.innerHTML;
        document.getElementById('add-update-button').innerHTML = "Update";
        value1.parentElement.remove();
     
 }

 function Delete(value1) {
    value1.parentElement.remove();
 }