

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

    
   
     function search(){

        var Select = document.getElementById("dropdown").value;
        var Item =document.getElementById("searchedItem").value;

        console.log(Select);
        console.log(Item);
    

         var txt = "<table><tr><th>Company</th><th>Model</ht><th>Memory</th><th>Price</th></tr>";
          for(let i=0 ; i<=4 ; i++){
              for(let j = Select ; j <= Select ; j++){
                  if(products[i][j] == Item){
                      txt += "<tr>";
                      for(let k=0 ; k<=3 ; k++){
                      var x = products[i][j];
                      txt += "<td>" + x + "</td>";
                      }
                      txt += "</tr>";
                  }
              }
          }
        txt += "</table>";
        document.getElementById("div1").innerHTML = txt;
     }
       
