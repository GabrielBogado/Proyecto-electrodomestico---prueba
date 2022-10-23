const tablaCarrtito = (producto) => {
  return `<tr>
              <td class="nombreProducto">${producto.nombre}</td>
              <td class"tipoProducto">${producto.tipo}</td>
              <td class="importeProducto">${producto.precio}</td>
              <td class="eliminarProducto"><button class="button botonEliminar" id="${producto.nombre}" title="Click para eliminar el producto del carrito">❌</button></td>
            </tr>`;
};
