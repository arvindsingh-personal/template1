function product()
{
    
    let Id=document.getElementById("ID").value;
    let Name=document.getElementById("NM").value;
    let Price=document.getElementById("PRC").value;
    
    // if(Id == "")
    //   alert("Please fill all required fields");
    // if(Name == "")
    //   alert("Please fill all required fields");
    // if(Price == "")
    //   alert("Please fill all required fields");

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    const field1 = document.createTextNode(Id);
    const field2 = document.createTextNode(Name);
    const field3 = document.createTextNode(Price);

    td1.appendChild(field1);
    td2.appendChild(field2);
    td3.appendChild(field3);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("SHOW").appendChild(tr);
}
  