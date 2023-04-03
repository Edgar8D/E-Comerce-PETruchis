import { productosServices } from "../service/productos-services.js"

const nuevoProducto2 = (imagen, nombre,  precio, id) =>{
    const card2 = document.createElement("div")
    const contenido2 = `                   
    <div class="producto__contenido">
    <img src="${imagen}" alt="accesorio IMG" class="contenido__img">
    <ul>
        <li class="producto__descripcion"><h3 class="descripcion">${nombre}</h3></li>
        <li class="producto__subDesctipcion"><p class="subDesctipcion">${precio}</p></li>
        <li class="producto__subDesctipcion"><a class="link__producto" href="${id}">Ver Producto</a></li>
    </ul>                                   
    </div>`
    card2.innerHTML = contenido2 

    //card.dataset.id = id
    return card2 
}

const table2 = document.querySelector("[data-Accesorios]");
const table3 = document.querySelector("[data-alimentos");
const table4 = document.querySelector("[data-otros]");

productosServices.listaProductos().then((data) => {
    data.forEach(({imagen,categoria,nombre,precio,id}) => {

        if(categoria === "accesorios"){
            const nuevaLiena2 = nuevoProducto2(imagen,nombre,precio,id);
            table2.appendChild(nuevaLiena2);
        }else if(categoria === "alimentos"){
            const nuevaLiena2 = nuevoProducto2(imagen,nombre,precio,id);
            table3.appendChild(nuevaLiena2);
        }else if(categoria === "otros"){
            const nuevaLiena2 = nuevoProducto2(imagen,nombre,precio,id);
            table4.appendChild(nuevaLiena2);
        }
        
    });
}).catch((error) => alert("Ocirrió un error 800"));