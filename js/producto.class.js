const IVA = 1.21;
const carrito = [];
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
