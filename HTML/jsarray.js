const products = [
        
  ["Samsung" , "Galaxy" , 64 , 15000],
  ["Nokia" , "S730" , 128 , 22000],
  ["Xiaomi" , "Note" , 32 , 12000],
  ["Motorola" , "G10" , 32 , 15000],
  ["Apple" , "S12" , 64 , 25000]
];
var table = document.getElementById("table");
var head = table.insertRow(0);

var headRow = ["comapany","Model","Memory(GB)","Price"];
for(var i=0; i < headRow.length ; i++){
 var th =document.createElement("th");
 th.innerText = headRow[i];
 head.appendChild(th);
}
products.forEach((row) => {

 let tr = document.createElement("tr");
 row.forEach((column) => {
     
     let td = document.createElement("td");
     td.innerText = column;
     
     tr.appendChild(td);
 });
 table.appendChild(tr);
});



var Select;
var Item;
var txt;



function tableView(){
Select = document.getElementById("dropdown").value;
Item =document.getElementById("searchedItem").value;
// console.log(Select);
// console.log(Item);

txt = "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
for(let i=0 ; i<=4 ; i++){
 
     if(products[i][Select] == Item){
         
         txt += "<tr>";
         for(let k=0 ; k<=3 ; k++){
         var x = products[i][k];
         txt += "<td>" + x + "</td>";
         }
         txt += "</tr>";       
 }
}
txt += "</table>"; 


}

function search(){

 tableView();
 document.getElementById("div1").innerHTML = txt;
}

function tableSortedView(){
txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th></tr>";

for(let i=0 ; i<products.length ; i++){
 txt+="<tr>";
 for(let j=0;j<products[i].length;j++){
         txt += "<td>"+products[i][j]+"</td>";
 }
 txt+="</tr>";
}
txt += "</table>"; 

}


function sorting(){

const dropD2 = document.getElementById("dropdown2").value;
const dropD3 = document.getElementById("dropdown3").value;

// console.log(dropD2);
// console.log(dropD3);

if(dropD2 == 0){

 products.sort(sortFunction);

 function sortFunction(a,b){
     if(a[dropD3] == b[dropD3])
       return 0;
     else 
       return (a[dropD3] > b[dropD3]) ? 1 : -1;
 }
}

else{

 products.sort(sortFunction);

 function sortFunction(a,b){
    if(a[dropD3] == b[dropD3])
      return 0;
    else 
      return (a[dropD3] > b[dropD3]) ? -1 : 1;
 }
}

tableSortedView();
document.getElementById("div2").innerHTML = txt;
}

function add(){
  
  var v1 = document.getElementById("cmp").value;
  var v2 = document.getElementById("md").value;
  var v3 = document.getElementById("memo").value;
  var v4 = document.getElementById("prc").value;

  // console.log(v1);
  // console.log(v2);
  // console.log(v3);
  // console.log(v4);

 var k = products.length;
 var i;
 for(i=0 ; i < k-2 ; i++){
    products[k-i] = products[k-i-1];
 }
   products[2] = [v1, v2, v3, v4];

   tableSortedView();
   document.getElementById("div3").innerHTML = txt;
   
}
var amount;
const products2 = [];
var prod;
var quant;
var totalAmount = 0;
function add2() {
   prod = document.getElementById("bill").value;
   quant = document.getElementById("quant").value;
  
  // console.log(prod);
  // console.log(quant);

  if(prod == "Samsung Galaxy") 
      amount = 15000*quant;
  else if(prod == "Nokia S730") 
      amount = 22000*quant;
  else if(prod == "Xiaomi Note") 
      amount = 12000*quant;
  else if(prod == "Motorola G10") 
      amount = 15000*quant;
  else if(prod == "Apple S12") 
      amount = 25000*quant;
   
   totalAmount += amount;
   products2[products2.length] = [prod, quant, amount];
   
  
}
function bill() {
  var txt2 = "<table><tr><th>Bill</th></tr><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>" ;
  for(let i = 0 ; i < products2.length ; i++) {
    txt2 += "<tr>";
    for(let j = 0 ; j < products2[i].length ; j++) {
      txt2 += "<td>" + products2[i][j] + "</td>";
    }
    txt2 += "</tr>";
  }
  txt2 += "<tr><td>Total</td><td></td><td>" + totalAmount + "</td></tr>";
  document.getElementById("divBill").innerHTML = txt2;
  
 }
 
 txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Action</th></tr>";
 for(let i=0;i<products.length;i++) {
 
   txt+="<tr>";
   for(let j=0;j<products[i].length;j++){
         txt += "<td>"+products[i][j]+"</td>";
   }
   txt+="<td><input type ='checkbox' id='"+products[i][0]+"' value='"+products[i][0]+"'><td></tr>";
 }
 txt += "</table>"; 
 
 document.getElementById("div4").innerHTML = txt;

 
function Delete() {
  var values =[];
  for(let i=0;i<products.length;i++){
     var chk = document.getElementById(products[i][0]).checked;
     if(chk == true){
        values.push(products[i][0]);
     }
  }


  for(let i=0;i<values.length;i++){
    for(let j=0;j<products.length;j++){
       if(products[j][0] == values[i])
          products.splice(j,1);
    }
  }

  txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Action</th></tr>";
  for(let i=0;i<products.length;i++){
     txt += "<tr>";
     for(let j=0;j<products[i].length;j++){
        txt += "<td>"+products[i][j]+"</td>";
     }
     txt += "<td><input type = 'checkbox' id = '"+products[i][0]+"' value = '"+products[i][0]+"'></td></tr>";
  }
  txt += "</table>";
  document.getElementById("div4").innerHTML = txt;
}


var quantityArray = products.map(function(arr) {
  return arr.slice();
 });
 quantityArray.forEach(column => {
   let q = (column[3]/1000);
    column[4] = q;
  });
// var newArray = products.map(function(arr) {
//   return arr.slice();
// });
txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
for(let i=0;i<quantityArray.length;i++) {
 
  txt+="<tr>";
  for(let j=0;j<quantityArray[i].length;j++){
        txt += "<td>"+quantityArray[i][j]+"</td>";
  }
  txt+="</tr>";
}
txt += "</table>"; 

document.getElementById("div5").innerHTML = txt;


function addToCart() {
  
  var selectedProd = document.getElementById("cart").value;
  var QUANT = document.getElementById("Quant").value;
  console.log(selectedProd);
  console.log(QUANT);

  for(let i=0; i<quantityArray.length;i++){
    if(quantityArray[i][0] == selectedProd)
       quantityArray[i][4] = quantityArray[i][4]-QUANT;   
  }
  txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
for(let i=0;i<quantityArray.length;i++) {
 
  txt+="<tr>";
  for(let j=0;j<quantityArray[i].length;j++){
        txt += "<td>"+quantityArray[i][j]+"</td>";
  }
  txt+="</tr>";
}
txt += "</table>"; 

document.getElementById("div5").innerHTML = txt;
}

var inventoryArray = products.map(function(arr) {
  return arr.slice();
});
inventoryArray.forEach(column => {
    let q = (column[3]/1000);
     column[4] = q;
  
});
txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
for(let i=0;i<inventoryArray.length;i++) {
 
  txt+="<tr>";
  for(let j=0;j<inventoryArray[i].length;j++){
        txt += "<td>"+inventoryArray[i][j]+"</td>";
  }
  txt+="</tr>";
}
txt += "</table>"; 

document.getElementById("div6").innerHTML = txt;

function inventoryManager() {

  var selectedProd2 = document.getElementById("inventory").value;
  var QUANT2 = document.getElementById("Quant2").value;
  console.log(selectedProd2);
  console.log(QUANT2);

  for(let i=0; i<inventoryArray.length;i++){
    if(inventoryArray[i][0] == selectedProd2)
       inventoryArray[i][4] = parseInt(inventoryArray[i][4])+parseInt(QUANT2);   
  }
  txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
for(let i=0;i<inventoryArray.length;i++) {
 
  txt+="<tr>";
  for(let j=0;j<inventoryArray[i].length;j++){
        txt += "<td>"+inventoryArray[i][j]+"</td>";
  }
  txt+="</tr>";
}
txt += "</table>"; 

document.getElementById("div6").innerHTML = txt;
   
}
var rateArray = products.map(function(arr){
   return arr.slice();
});
 rateArray.forEach(column => {
    column[4] = 0;
 });
function rate() {
   var selectedProd = document.getElementById("rateProduct").value;
   var rate = document.getElementById("rate").value;

   for(let i=0;i<rateArray.length;i++){
      if(rateArray[i][0] == selectedProd){
        rateArray[i][4] = rate;
        break;
      }
   }
   txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th><th>Rating</th></tr>";
for(let i=0;i<rateArray.length;i++) {
 
  txt+="<tr>";
  for(let j=0;j<rateArray[i].length;j++){
        txt += "<td>"+rateArray[i][j]+"</td>";
  }
  txt+="</tr>";
}
txt += "</table>"; 

document.getElementById("div7").innerHTML = txt;
}

function priceSearch() {
   var min = document.getElementById("min").value;
   var max = document.getElementById("max").value;
   txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th></tr>";
   for(let i=0;i<products.length;i++){
      if(products[i][3]>=min && products[i][3]<=max){
        txt += "<tr>"
        for(let j=0;j<products[i].length;j++){
          txt += "<td>"+products[i][j]+"</td>";
       }
       txt += "</tr>";
     }
  }
  txt += "</table>";

  document.getElementById("div8").innerHTML = txt;
}