
function validate(){
    var Age=document.getElementById("age").value;
var Weight=document.getElementById("wght").value;
    if(Age<5){
      alert("Please enter valid age!");
      exit();
    }
    else if(5<=Age<=7){
        if(Weight<15)
          document.getElementById("para1").innerHTML="You are underweight."
        else if(Weight>20)
          document.getElementById("para1").innerHTML="You are overweight."
        else 
          document.getElementById("para2").innerHTML="Keep it Up!."
    }
    else if(8<=Age<=10){
        if(Weight<21)
          document.getElementById("para1").innerHTML="You are underweight."
        else if(Weight>25)
          document.getElementById("para1").innerHTML="You are overweight."
        else if(21<=Weight<=25)
          document.getElementById("para2").innerHTML="Keep it Up!."
    }
    else if(11<=Age<=15){
        if(Weight<26)
          document.getElementById("para1").innerHTML="You are underweight."
        else if(Weight>30)
          document.getElementById("para1").innerHTML="You are overweight."
        else 
          document.getElementById("para2").innerHTML="Keep it Up!."
    }
    else if(16<=Age<=20){
        if(Weight<31)
          document.getElementById("para1").innerHTML="You are underweight."
        else if(Weight>40)
          document.getElementById("para1").innerHTML="You are overweight."
        else 
          document.getElementById("para2").innerHTML="Keep it Up!."
    }
    else {
      alert("Please enter valide age!");}

}