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
                <input type="button" class="botones" value="Ver info">

            </div>
        `;
        contenedor_coches.appendChild(div_coche)
    })

}

function filtro() {
    var marca_seleccionada = document.getElementById("marca").value;
    var ano_seleccionada = document.getElementById("ano").value;

    if(marca_seleccionada){
        coches_json=coches_json.filter(coches=>coches.marca==marca_seleccionada);
    }

    if(ano_seleccionada){
        coches_json=coches_json.filter(c=>c.ano==ano_seleccionada);
    }

    var contenedor_coches = document.getElementById("coches");
    contenedor_coches.innerHTML=" ";

    coches_json.forEach((coche, index) => {
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
                <input type="button" class="botones" value="Ver info">

            </div>
        `;
        contenedor_coches.appendChild(div_coche)
    })
}
