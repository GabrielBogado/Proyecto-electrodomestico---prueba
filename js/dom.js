const contenedorCard = document.querySelector("div.contenedorCard");

const activarBtnVendedor = () => {
  const botonVendedor = document.querySelector(".botonVendedor");
  botonVendedor.addEventListener("click", () => agregarProducto());
};
activarBtnVendedor();

const activarBotonesAdd = () => {
  const botonesAdd = document.querySelectorAll(
    ".button.button-outline.button-add"
  );
  botonesAdd.forEach((btn) =>
    btn.addEventListener("click", (e) => agregarCarrito(e))
  );
};

const cargarProductos = () => {
  contenedorCard.innerHTML = "";
  productos.forEach(
    (producto) => (contenedorCard.innerHTML += retornoCards(producto))
  );
  activarBotonesAdd();
};

function sumaCarrito() {
  let totalCarrito = carrito.reduce(
    (acc, elemento) => acc + elemento.precio,
    0
  );
  console.log("El total del carrito es de: $", totalCarrito);
}

const agregarCarrito = (e) => {
  let resultado = productos.find((produ) => produ.nombre === e.target.id);
  if (resultado !== undefined) {
    carrito.push(resultado);
    guardarCarrito();
    sumaCarrito();
  }
};

const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  } else {
    console.warn("No se encontro un carrito guardado");
  }
};
cargarProductos();
recuperarCarrito();
