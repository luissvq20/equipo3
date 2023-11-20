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
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var ano = document.getElementById("ano").value;

    if(marca==" " || modelo=="" || ano==""){
        alert("Algunos de los campos obligatorios están incompletos")
    }else{
        document.getElementById("f1").style.display = "none";
        document.getElementById("f2").style.display = "block";
        document.getElementById("f3").style.display = "none";
    }

}

function form3(){
    document.getElementById("f1").style.display = "none";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "block";
}

function showmodalform() {

    var modalform = document.getElementById("modalform");
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var concesionario = document.getElementById("Concesionario").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;



    modalform.innerHTML = " ";
    var div_cochemodal = document.createElement("div");

        div_cochemodal.innerHTML = `                
    <div class="modall">
    <h2>Datos de la cita</h2>
    <ul>
        <li>Marca:</li>
        <li><span>${marca}</span></li>
        <li>Modelo:</li>
        <li><span>${modelo}</span></li>
        <li>Nombre del propietario:</li>
        <li><span>${nombre}</span></li>
        <li>Teléfono:</li>
        <li><span>${telefono}</span></li>
        <li>Concesionario:</li>
        <li><span>${concesionario}</span></li>
        <li>Dia de la cita:</li>
        <li><span>${fecha}</span></li>
        <li>Hora:</li>
        <li><span>${hora}</span></li>

    </ul>
    
    </div>






`;
        modalform.appendChild(div_cochemodal);

        document.getElementById("exampleModalform").className="modal face show"
        var div_opacity = document.createElement("div");
        div_opacity.className="modal-backdrop fade show";
        
        document.getElementsByTagName("body")[0].appendChild(div_opacity);
        document.getElementById("exampleModalform").style.display="block"
        document.getElementById("logo").style.display="none";

    
}

function closemodalform() {
    //ocultar el modal
        document.getElementById("exampleModalform").style.display="none";
    
    //restablecer fondo
        var div_opacity = document.querySelector(".modal-backdrop.fade.show");
        if (div_opacity) {
            div_opacity.parentNode.removeChild(div_opacity);
        }

    //restaurar
        document.getElementById("exampleModalform").className = "modal face";

        document.getElementById("logo").style.display="block";


}
