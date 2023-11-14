document.addEventListener("DOMContentLoaded", init);
var coches_json;
function init() {
    fetch('/json/coches.json')
        .then((response) => response.json())
        .then((data) => {
            var dataset = data.coches;
            coches_json = data.coches;
            mostrarCoches(dataset);
        });
}

function mostrarCoches(datos) {
    var contenedor_coches = document.getElementById("coches");
    contenedor_coches.innerHTML = " ";


    datos.forEach((coche, index) => {
        var div_coche = document.createElement("div");
        div_coche.className = "col"
        div_coche.id = "coche_" + index;
        div_coche.innerHTML = `
           
            <div class="divimagen" >
                <div>
                    <img src="/images/${coche.imagen_coche}" id="imagen_coche" alt="" class="img-galeria">
                </div>
                <div class="texto">
                    <p class="desde" id="desde_precio">${coche.desde_precio}</p>
                    <p class="precio" id="precio">${coche.precio}€</p>
                    <p class="nombre" id="nombre">${coche.nombre}</p>
                    <p id="descripcion_1">${coche.descripcion_1}</p>
                    <p id="descripcion_2">${coche.descripcion_2}</p>
                </div>
                <input type="button" class="botones" onclick=showmodal(${coche.id}) value="Ver info">

            </div>
        `;
        contenedor_coches.appendChild(div_coche)
    })

}

function filtro() {
    var marca_seleccionada = document.getElementById("marca").value;
    var ano_seleccionada = document.getElementById("ano").value;
    var precio_seleccionada = document.getElementById("precio").value;
    var combustible_seleccionada = document.getElementById("combustible").value;
    var plazas_seleccionada = document.getElementById("plazas").value;

    var coches_filtrados = coches_json



    if (marca_seleccionada) {
        coches_filtrados = coches_json.filter(coches => coches.marca == marca_seleccionada);
    }
    if (ano_seleccionada) {
        coches_filtrados = coches_filtrados.filter(coches => coches.ano == ano_seleccionada);
    }
    if (precio_seleccionada) {
        coches_filtrados = coches_filtrados.filter(coches => coches.precio == precio_seleccionada);
    }
    if (combustible_seleccionada) {
        coches_filtrados = coches_filtrados.filter(coches => coches.combustible == combustible_seleccionada);
    }
    if (plazas_seleccionada) {
        coches_filtrados = coches_filtrados.filter(coches => coches.plazas == plazas_seleccionada);
    }

    var contenedor_coches = document.getElementById("coches");
    contenedor_coches.innerHTML = " ";
    coches_filtrados.forEach((coche, index) => {
        var div_coche = document.createElement("div");
        div_coche.className = "col"
        div_coche.id = "coche_" + index;
        div_coche.innerHTML = `
           
            <div class="divimagen" >
                <div>
                    <img src="/images/${coche.imagen_coche}" id="imagen_coche" alt="" class="img-galeria">
                </div>
                <div class="texto">
                <p class="desde" id="desde_precio">${coche.desde_precio}</p>
                <p class="precio" id="precio">${coche.precio}€</p>
                <p class="nombre" id="nombre">${coche.nombre}</p>
                <p id="descripcion_1">${coche.descripcion_1}</p>
                <p id="descripcion_2">${coche.descripcion_2}</p>
                </div>
                <input type="button" class="botones" onclick=showmodal(${coche.id}) value="Ver info">

            </div>
        `;
        contenedor_coches.appendChild(div_coche)
    })
}

function borrar_filtro() {
    document.getElementById("marca").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("combustible").value = "";
    document.getElementById("plazas").value = "";

    mostrarCoches(coches_json);


}

function showmodal(id) {

    var coches_filtrados = coches_json
    coche_modal = coches_json.filter(coches => coches.id == id);

    var modal = document.getElementById("modal");
    var nombre = document.getElementById("nombre");
    modal.innerHTML = " ";

    coche_modal.forEach((coche, index) => {
        var div_cochemodal = document.createElement("div");


        div_cochemodal.innerHTML = `                
    <div class="">
    <div class="divimagen">
        <img src="/images/${coche.imagen_coche}" alt="" class="img-galeria">
        <div class="texto">
            <p class="desde">${coche.desde_precio}</p>
            <p class="precio">${coche.precio}€</p>
            <p class="nombre">${coche.nombre}</p>
            <p>${coche.descripcion_1}</p>
        </div>
    </div>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        FICHA TECNICA
    </button>
    <ul class="dropdown-menu">
        <li>
            <p class="dropdown-item" href="#"><strong>Velocidad máxima 220 km/h
                </strong><br>
                <strong>Aceleración 0-100 km/h 8,7 s</strong> <br>
                <strong>Consumo NEDC:</strong><br>
                Extraurbano 3,6 l/100 km <br>
                Urbano 5 l/100 km <br>
                Medio 4,1 l/100 km
            </p>
        </li>
    </ul>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        MULTIMEDIA
    </button>
    <ul class="dropdown-menu">
        <li>
            <p class="dropdown-item" href="#">
            <p>
                Ocho altavoces. <br>
                Equipo de audio con radio FM. <br>
                pantalla táctil. <br>
                Control remoto de audio en el volante. <br>
                Conexión para: entrada AUX delantera y USB delantero.
            </p>
        </li>
    </ul>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        SEGURIDAD
    </button>
    <ul class="dropdown-menu">
        <li>
            <p class="dropdown-item" href="#">
            <p>
                Airbag lateral de cortina delantero y trasero.<br>
                Airbag frontal del conductor, airbag frontal del acompañante
                desconectable.<br>
                Airbags laterales delanteros. <br>
                Preparación Isofix. <br>
                Airbag de rodilla para el conductor.</p>
        </li>
    </ul>
</div>

<div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
        INTERIOR
    </button>
    <ul class="dropdown-menu">
        <li>
            <p>
                <strong>Acabados de lujo: </strong><br>
                pomo de la palanca de cambios en aluminio y cuero. <br>
                consola central en negro piano. <br>
                Puertas en símil fibra carbono. <br>
                Tablero en simil fibra de carbono.
            </p>
        </li>
    </ul>
</div>


`;
        modal.appendChild(div_cochemodal);

        document.getElementById("exampleModal").className="modal face show"
        var div_opacity = document.createElement("div");
        div_opacity.className="modal-backdrop fade show";
        
        document.getElementsByTagName("body")[0].appendChild(div_opacity);
        document.getElementById("exampleModal").style.display="block"
        document.getElementById("logo").style.display="none";

    })
}

function closemodal(id) {
    //ocultar el modal
        document.getElementById("exampleModal").style.display="none";
    
    //restablecer fondo
        var div_opacity = document.querySelector(".modal-backdrop.fade.show");
        if (div_opacity) {
            div_opacity.parentNode.removeChild(div_opacity);
        }

    //restaurar
        document.getElementById("exampleModal").className = "modal face";

        document.getElementById("logo").style.display="block";


}
