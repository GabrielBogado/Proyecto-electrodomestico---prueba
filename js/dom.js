const contenedorCard = document.querySelector("div.contenedorCard");
const inputBusqueda = document.querySelector("#busqueda");
const botonBusqueda = document.querySelector("button.botonBusqueda");

// CLICK PARA QUE EL VENDEDOR AGREGUE PRODUCTOS
const activarBtnVendedor = () => {
  const botonVendedor = document.querySelector(".botonVendedor");
  botonVendedor.addEventListener("click", () => agregarProducto());
};
activarBtnVendedor();

// CLICK PARA QUE EL CLIENTE AGREGUE PRODUCTOS AL CARRITO
const activarBotonesAdd = () => {
  const botonesAdd = document.querySelectorAll(
    ".button.button-outline.button-add"
  );
  botonesAdd.forEach((btn) =>
    btn.addEventListener("click", (e) => agregarCarrito(e))
  );
};

// FUNCION PARA CARGAR TARJETA DE PRODUCTOS
const cargarProductos = () => {
  contenedorCard.innerHTML = "";
  productos.forEach(
    (producto) => (contenedorCard.innerHTML += retornoCards(producto))
  );
  activarBotonesAdd();
};

// FUNCION PARA BUSCAR CON EL INPUT ALGUN PRODUCTO, FALTA PULIR
const botonDeBusqueda = () => {
  botonBusqueda.addEventListener("click", busquedaInput);
};

const busquedaInput = () => {
  let productoNombre = inputBusqueda.value.toUpperCase();
  const productosFiltro = productos.filter((elemento) =>
    elemento.nombre.includes(productoNombre)
  );
  contenedorCard.innerHTML = "";
  productosFiltro.forEach(
    (producto) => (contenedorCard.innerHTML += retornoCards(producto))
  );
  activarBotonesAdd();
};

// LA SUMA DE LO ACUMULADO EN EL CARRITO
function sumaCarrito() {
  let totalCarrito = carrito.reduce(
    (acc, elemento) => acc + elemento.precio,
    0
  );
  console.log("El total del carrito es de: $", totalCarrito);
}

// FUNCION QUE PERMITE AGREGAR LOS PRODUCTOS AL CARRITO
const agregarCarrito = (e) => {
  let resultado = productos.find((produ) => produ.nombre === e.target.id);
  if (resultado !== undefined) {
    carrito.push(resultado);
    guardarCarrito();
    sumaCarrito();
  }
};

// SE GUARDA EL CARRITO EN JSON
const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

// SE RECUPERA EL CARRITO, PERO SE PREGUNTA ANTES SI SE QUIERE RECUPERAR O NO
const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  } else {
    console.warn("No se encontro un carrito guardado");
  }
};
botonDeBusqueda();
cargarProductos();
recuperarCarrito();
