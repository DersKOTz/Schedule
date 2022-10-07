var myVar=setInterval(function(){myTimer()},);
function myTimer(){
    var d=new Date();
    var t=d.toLocaleTimeString();
    document.getElementById("demo").innerHTML=t;
    var today = new Date();     
    var hours=today.getHours();
    var minutes=today.getMinutes();
}
