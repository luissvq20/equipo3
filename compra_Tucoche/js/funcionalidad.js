document.addEventListener("DOMContentLoaded", init);

function init() {
    fetch('/coches/coches.json')
        .then((response) => response.json())
        .then((data) => {
           var dataset = data.coches;
            mostrarCoches(dataset);
        });
}
function mostrarCoches(datos) {
    var contenedor_coches = document.getElementById("coches");
    
    datos.forEach((coche, index) => {
        var div_coche = document.createElement("div");
        div_coche.className="col"
        div_coche.id="coche_"+index;
        div_coche.innerHTML=`
           
            <div class="divimagen" >
                <div>
                    <img src="/menu_Principal/images/2.jpg" id="imagen_coche" alt="" class="img-galeria">
                </div>
                <div class="texto">
                    <p class="desde" id="desde_precio">${coche.desde_precio}</p>
                    <p class="precio" id="precio">${coche.precio}</p>
                    <p class="nombre" id="nombre">VW Arteon</p>
                    <p id="descripcion_1">2.0 TDI 190 quatt Str Attraction</p>
                    <p id="descripcion_2">2020 | 80.321km | DIESEL | Automatico</p>
                </div>
                <input type="button" class="botones" value="Ver info">

            </div>
        `;
        contenedor_coches.appendChild(div_coche)
    })

}

function filtrar(event) {
    var lista = document.getElementById("personas");
    var opcion = event.target.value;
    if (opcion === "todos") {
        lista.innerHTML = " ";
        mostrarPersonas();

    } else if (opcion === "ninos") {
        lista.innerHTML = " ";
        dataset.forEach(element => {
            if (element.edad > 0 && element.edad < 18) {
                var li = document.createElement("li");
                li.textContent = element.nombre + " (" + element.edad + ") " + element.descripcion;
                lista.appendChild(li);
            }


        }
        )

    } else if (opcion === "jovenes") {
        lista.innerHTML = " ";
        dataset.forEach(element => {
            if (element.edad >= 18 && element.edad < 25) {
                var li = document.createElement("li");
                li.textContent = element.nombre + " (" + element.edad + ") " + element.descripcion;
                lista.appendChild(li);
            }


        }
        )

    } else if (opcion === "adultos") {
        lista.innerHTML = " ";
        dataset.forEach(element => {
            if (element.edad >= 25 && element.edad < 75) {
                var li = document.createElement("li");
                li.textContent = element.nombre + " (" + element.edad + ") " + element.descripcion;
                lista.appendChild(li);
            }


        }
        )

    } else if (opcion === "ancianos") {
        lista.innerHTML = " ";
        dataset.forEach(element => {
            if (element.edad >= 75) {
                var li = document.createElement("li");
                li.textContent = element.nombre + " (" + element.edad + ") " + element.descripcion;
                lista.appendChild(li);
            }


        }
        )

    }
}
