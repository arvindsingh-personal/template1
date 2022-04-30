

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
   Select = document.getElementById("dropdown").value;
   

   function tableView(){
    Item =document.getElementById("searchedItem").value;
    txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th></tr>";
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

        

        console.log(Select);
        console.log(Item);
        tableView();
        console.log(txt);
        
        document.getElementById("div1").innerHTML = txt;
     }
     
function tableSortedView(){
    txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th></tr>";
    
    for(let i=0 ; i<=4 ; i++){
        txt+="<tr>";
        for(let j=0;j<4;j++){
            
                txt += "<td>"+products[i][j]+"</td>";
               

            
        }
        txt+="</tr>";

    }
  txt += "</table>"; 
  document.getElementById("div2").innerHTML = txt;

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
     //
    }