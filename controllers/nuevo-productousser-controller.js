import { productosServices } from "../service/productos-services.js"

const nuevoProducto3 = (imagen, nombre,  precio, id) =>{
    const card3 = document.createElement("div")
    const contenido3 = `                   
    <div class="producto__contenido">
    <img src="${imagen}" alt="accesorio IMG" class="contenido__img">
    <ul>
        <li class="producto__descripcion"><h3 class="descripcion">${nombre}</h3></li>
        <li class="producto__subDesctipcion"><p class="subDesctipcion">${precio}</p></li>
        <li class="producto__subDesctipcion"><a class="link__producto" href="${id}">Ver Producto</a></li>
    </ul>                                    
    </div>`
    card3.innerHTML = contenido3 

    //card.dataset.id = id
    return card3
}
const tableUsuario = document.querySelector("[data-accesoriosUsuario]");



productosServices.listaProductos().then((data) => {
    data.forEach(({imagen,nombre,precio,id}) => {
        const nuevaLiena3 = nuevoProducto3(imagen,nombre,precio,id);
            tableUsuario.appendChild(nuevaLiena3);
        });
    }).catch((error) => alert("Ocirrió un error"));