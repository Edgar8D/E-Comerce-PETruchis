import { productosServices } from "../service/productos-services.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacio = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href="/screens"

    }

    let imagen1 = ""
    let categoria = ""
    let nombre = ""
    let precio = ""

    try{
        const producto = await productosServices.detalleProducto(id);
        imagen1 = producto.imagen;
        categoria = producto.categoria;
        nombre = producto.nombre;
        precio = producto.precio;
    }catch(err){
        alert("error")
    }



    document.querySelector("[data-url").value = imagen1;
    document.querySelector("[data-categoria]").value = categoria ;
    document.querySelector("[data-nombre]").value = nombre;
    document.querySelector("[data-precio]").value = precio;

    console.log(imagen1)
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(document.querySelector("[data-url").value)
        const imagen = document.querySelector("[data-url").value;
        const categoria = document.querySelector("[data-categoria]").value;
        const nombre = document.querySelector("[data-nombre]").value;
        const precio = document.querySelector("[data-precio]").value;
        console.log(imagen)
        productosServices.actualizarProducto(imagen, categoria, nombre, precio, id).then(() => {
            window.location.href = "/screens/producto-editado.html"
        }).catch((err) => console.log(err))
    })
};

obtenerInformacio();

