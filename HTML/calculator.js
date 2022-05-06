var cal = "";
function display(val) {
document.getElementById('textfield').value += val;

}
function calculate() {
     var res = eval(document.getElementById('textfield').value);
     document.getElementById("textfield").value = res;

}

function reset() {
    document.getElementById("textfield").value = "";
  
}