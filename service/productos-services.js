const listaProductos = () => fetch("https://my-json-server.typicode.com/Edgar8D/E-Comerce-PETruchis").then((respuesta) => respuesta.json());
//funcion que comunica con el servidor, recibe la respuesta y genera un json

const crearProducto = (imagen, categoria, nombre, precio) =>{
    return fetch("https://my-json-server.typicode.com/Edgar8D/E-Comerce-PETruchis", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        //estructura que agrega una nuva seccion a nuestro archivo db.json
        body: JSON.stringify({imagen, categoria, nombre, precio, id: uuid.v4() }), //JSON.stringify: cambia el contenido a texto en el archivo db.json
    });
};

const eliminarProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/Edgar8D/E-Comerce-PETruchis/${id}`, {
    method: "DELETE",
    });
};
const detalleProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/Edgar8D/E-Comerce-PETruchis/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (imagen, categoria, nombre, precio, id) => {
    return fetch(`https://my-json-server.typicode.com/Edgar8D/E-Comerce-PETruchis/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio})
    }).then(respuesta => respuesta ).catch(error => console.log(error))
}
export const productosServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};
