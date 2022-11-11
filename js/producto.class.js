const IVA = 1.21;
const carrito = [];
const nuevosProductos = [];
class Producto {
  constructor(nombre, precio, stock, tipo, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.tipo = tipo;
    this.imagen = imagen;
  }
  precioFinal() {
    return this.precio * IVA;
  }
  nombreUC() {
    return this.nombre.toUpperCase();
  }
}

function agregarProducto() {
  let nombre = prompt("Ingrese nombre del producto:").toUpperCase();
  let precio = parseInt(prompt("Ingrese precio:"));
  let stock = parseInt(prompt("Ingrese stock disponible:"));
  let tipo = prompt("Ingrese tipo de producto").toUpperCase();
  let imagen = prompt("Ingrese link de imagen:");

  nuevosProductos.push(new Producto(nombre, precio, stock, tipo, imagen));
  let seguirAgregando = confirm("¿Desea seguir agregando productos?");
  //guardarProductosNuevos();
  if (seguirAgregando) {
    agregarProducto();
  } else {
    return cargarProductosNuevos();
  }
}
/* const guardarProductosNuevos = () => {
  if (nuevosProductos > 0) {
    localStorage.getItem("nuevosProductos", JSON.stringify(nuevosProductos));
  }
}; */

/* //SE RECUPERA NUEVOS PRODUCTOS
const recuperarProductosNuevos = () => {
  if (localStorage.getItem("nuevosProductos")) {
    let recuperandoNuevosProductos = JSON.parse(
      localStorage.getItem("nuevosProductos")
    );
    recuperandoNuevosProductos.forEach((nuevos) =>
      nuevosProductos.push(nuevos)
    );
  }
};
recuperarProductosNuevos();
*/
