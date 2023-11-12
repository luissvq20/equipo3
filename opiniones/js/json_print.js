document.addEventListener("DOMContentLoaded", init);

function init() {
    fetch('/json/opiniones.json')
        .then((response) => response.json())
        .then((data) => {
           var dataset = data.opiniones;
            mostrarOpiniones(dataset);
        });
}
function mostrarOpiniones(datos) {
    var contenedor_opiniones = document.getElementById("opiniones");
    
    datos.forEach((opinion, index) => {
        var div_opinion = document.createElement("div");
        div_opinion.className="opiniones bg-opiniones mt-xxl-4 mt-md-4 mt-4 col-xxl-5 col-md-10 col-11"
        div_opinion.id="opinion_"+index;
        div_opinion.innerHTML=`
           
        <div>
        <div class="datos">
            <div class="usuario-imagen">
                <img src=${opinion.usuarioImagen} id="usuario-imagen">
            </div>
            <div class="comentario">
                <p> <strong>${opinion.usuarioNombre}</strong>${opinion.usuarioDatos}</p>
            </div>
            <div class="imagen-like">
                <button><img src="/opiniones/img/me-gusta.png" id="like"></button>
            </div>
        </div>
        <div class="ec-stars-wrapper">
            <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
            <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
            <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
            <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
            <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
        </div>
        <div class="text">
            <p>${opinion.comentario} </p>
        </div>
        <div class="fecha-comentario">
            <p>
                ${opinion.fechaComentario}<br>
                Esta es la opinión subjetiva de un miembro de Kar Mc Queen, no de Kar Mc Queen.
                Kar Mc Queen realiza comprobaciones de las opiniones.
            </p>
        </div>
        `;
        contenedor_opiniones.appendChild(div_opinion)
    })

}