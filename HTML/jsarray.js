    
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
console.log(Select);
console.log(Item);

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

console.log(dropD2);
console.log(dropD3);

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

  console.log(v1);
  console.log(v2);
  console.log(v3);
  console.log(v4);

 var k = products.length;
 var i;
 for(i=0 ; i < k-2 ; i++){
    products[k-i] = products[k-i-1];
 }
   products[2] = [v1, v2, v3, v4];

   tableSortedView();
   document.getElementById("div3").innerHTML = txt;
 
}