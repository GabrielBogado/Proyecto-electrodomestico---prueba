//TEMPLATE PARA VER EL CARRITO EN UNA TABLA CON BOTON PARA ELIMINAR

const tablaCarrtito = (producto) => {
  return `<tr>
              <td class="nombreProducto">${producto.nombre}</td>
              <td class"tipoProducto">${producto.tipo}</td>
              <td class="importeProducto">${producto.precio}</td>
              <td class="eliminarProducto"><button class="button botonEliminar" id="${producto.nombre}" title="Click para eliminar el producto del carrito">❌</button></td>
            </tr>`;
};
function sumaCarrito() {
  /* let  */totalCarrito = carrito.reduce(
    (acc, elemento) => acc + elemento.precio,
    0
  );
  tbody.innerHTML += `<tr>
            <td></td>
            <td>TOTAL:</td>
            <td class="totalProducto">${totalCarrito.toFixed(2)}</td>
          </tr>`;
}
sumaCarrito();
