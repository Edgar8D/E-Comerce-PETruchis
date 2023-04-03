import { productosServices } from "../service/productos-services.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const imagen = document.querySelector("[data-url").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
   
    productosServices
        .crearProducto(imagen, categoria, nombre, precio)
        .then(() => {
        window.location.href = "/screens/producto-agregado.html";
    }).catch((err) => console.log(err));
});