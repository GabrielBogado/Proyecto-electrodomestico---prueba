const carrito = [];

const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

/* const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  } else {
    console.warn("No se encontro un carrito guardado");
  }
}; */

