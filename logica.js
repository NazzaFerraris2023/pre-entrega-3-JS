//llamando al div para poder inyectarle los productos a la pagina
const contenedor_lista_productos = document.getElementById("contenedor_productos");
//paso 1 del mostrando el carrito en la consola:
const tabla_Carrito=document.getElementById("tabla_Carrito")


let carrito =[]
/*Dentro del algorito para crear los productos
Paso 1:Debo crear un div que contenga el producto
Paso 2: Crear contenido Html adentro del div (con innerHTML)
Paso 3: Agregar el div para que aparezca en la pagina web (debo tener un div padre en el html)
Paso 3.5: Crear una nueva variable en JS para poder capturar con el getelementbyid() el div padre
Paso 4: Colocar los productos en la nueva variable que esta conectada al div padre
*/


lista_productos.forEach((producto)=>{
let contenedor_producto=document.createElement("div")
contenedor_producto.className="contenedor_productos"

    contenedor_producto.innerHTML=`
        <img src="${producto.Foto}" class="img_producto">
        <h3 class="nombre_producto">${producto.Nombre}</h3>
        <p class="precio_producto">$${producto.Precio}</p>
    `;

    contenedor_lista_productos.append(contenedor_producto)

//Creando boton para comprar el producto: (Son los mismos pasos que se realizo antes)
let btn_comprar= document.createElement("button")
//innerText---> va a permitirme colocar texto a las etiquetas
    btn_comprar.innerText="Comprar!"
    btn_comprar.className="btn"

    contenedor_producto.append(btn_comprar)

    //dandole funcionalidad a los botones (eventos)
    btn_comprar.addEventListener("click",()=>{
        carrito.push({
            Id:producto.Id,
            Nombre:producto.Nombre,
            Precio:producto.Precio,
        })
        console.log(carrito)
        mostrando_carrito()
        calculando_precio_final_carrito()
    })




}) 

//Funciones:
function mostrando_carrito(){
    tabla_Carrito.innerHTML=""
    carrito.forEach(producto=>{
        tabla_Carrito.innerHTML+=`
        <tr> 
        <td>${producto.Id}</td>
        <td>${producto.Nombre}</td>
        <td>$${producto.Precio}</td>
        </tr>
        `
    })
        
}

function calculando_precio_final_carrito(){
    const precio_final=carrito.reduce((acc,el)=>acc+=el.Precio,0)
    console.log(precio_final)

    const precio_final_dom=document.getElementById("saldo-total")
    precio_final_dom.textContent=`El precio final de su compra es de:$${precio_final}`
}



// boton dark-light mode
