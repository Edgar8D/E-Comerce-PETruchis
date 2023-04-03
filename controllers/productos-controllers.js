import { productosServices } from "../service/productos-services.js"

const nuevoProducto = (imagen, nombre,  precio, id) =>{
    const card = document.createElement("div")
    const contenido = `                   
    <div class="producto__contenido">
    <img src="${imagen}" alt="accesorio IMG" class="contenido__img">
    <ul>
        <li class="producto__descripcion"><h3 class="descripcion">${nombre}</h3></li>
        <li class="producto__subDesctipcion"><p class="subDesctipcion">${precio}</p></li>
        <li class="producto__subDesctipcion"><a class="link__producto" href="${id}">Ver Producto</a></li>
    </ul>
    <a href="../screens/editar-producto.html?id=${id}" class="boton__editar">Editar</a>
    <button class="boton__eliminar" id="${id}">Eliminar</button>                                     
    </div>`
    card.innerHTML = contenido 
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id
        productosServices.eliminarProducto(id).then(respuesta =>{
        console.log(respuesta)
        }).catch((err) => alert("ocurrio un error 600"))
        
    })
    //card.dataset.id = id
    return card 
}
const table = document.querySelector("[data-todosAccesorios]");

productosServices.listaProductos().then((data) => {
    data.forEach(({ imagen, nombre, precio, id}) => {
        const nuevalinea = nuevoProducto(imagen, nombre, precio, id);
         table.appendChild(nuevalinea)
     });
}).catch((error) => alert("Ocurrio un Error 700"));
