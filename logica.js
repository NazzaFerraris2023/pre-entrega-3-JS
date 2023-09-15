//productos del carrito:

const contenedor_productos = document.getElementById("productos")
const tabla_body = document.getElementById("tablaCarrito")

/*Creando la funcion:
Esta funcion se va a encargar de recibir un array de productos y por cada producto va a generar una card con esas caracteristicas.
*/

function renderizando_productos (lista_productos){
    for (const producto of lista_productos){
        contenedor_productos.innerHTML+=
        `
        <div class="card" style="width: 18rem;">
        <img src=${producto.Foto} class="card-img" alt=${producto.Nombre}/>
            <div class="card-body">
                <h5 class="card-title">${producto.Nombre}</h5>
                <p class="card-text">${producto.Precio}</p>
                <button id=${producto.Id} class="btn-compra">Comprar!</button>
            </div>
    </div
        `
    }
}

//Definiendo eventos para los botones:
let btn = document.getElementsByClassName("btn-compra")

for(const botones of btn ){
    botones.addEventListener("click",()=>{
        console.log("Hiciste click en el id numero:"+botones.id)
 // creo una constante para colocar un .find asi puedo poner el nombre del producto que va a pasar al carrito
        const productos_a_carrito = lista_productos.find((producto)=>producto.id==botones.id)
        console.log(productos_a_carrito)
        //Agregando producto encontrado al carrito
            //Creo una funcion que todavia no esta creada para poder guardar el producto en el carrito
        productos_en_Carrito(productos_a_carrito)//Funcion en donde voy a guardar los productos destinados al carrito
    })

}

