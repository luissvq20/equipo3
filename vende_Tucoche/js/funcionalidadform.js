document.addEventListener("DOMContentLoaded", init);
function init() {
    form1();
       
}

function form1(){
    document.getElementById("f1").style.display = "block";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
}

function form2(){
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "block";
    document.getElementById("f3").style.display = "none";
}

function form3(){
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "block";
}

