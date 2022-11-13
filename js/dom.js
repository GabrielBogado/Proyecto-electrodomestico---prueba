const contenedorCard = document.querySelector("div.contenedorCard");
const inputBusqueda = document.querySelector("#busqueda");
const botonBusqueda = document.querySelector("button.botonBusqueda");
let productos = [];
const URL = "../baseDatos/productos.json";

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

const cargarProductosNuevos = () => {
  nuevosProductos.forEach(
    (producto) => (contenedorCard.innerHTML += retornoCards(producto))
  );
  activarBotonesAdd();
};

// FUNCION PARA CARGAR TARJETA DE PRODUCTOS
const cargarProductos = async () => {
  let armandoHTML = "";
  let activarBotones = true;

  try {
    const response = await fetch(URL);
    productos = await response.json();
    productos.forEach((producto) => (armandoHTML += retornoCards(producto)));
  } catch (error) {
    armandoHTML = retornoError();
    activarBotones = false;
    console.log(error);
  } finally {
    contenedorCard.innerHTML = armandoHTML;
    if (activarBotones) {
      activarBotonesAdd();
    }
  }
};

// FUNCION PARA BUSCAR CON EL INPUT ALGUN PRODUCTO
const botonDeBusqueda = () => {
  botonBusqueda.addEventListener("click", busquedaInput);
  inputBusqueda.addEventListener("keyup", busquedaInput);
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

// FUNCION QUE PERMITE AGREGAR LOS PRODUCTOS AL CARRITO
const agregarCarrito = (e) => {
  let resultado = productos.find((produ) => produ.nombre === e.target.id);
  if (resultado !== undefined) {
    carrito.push(resultado);
    toast(`Se agrego ${resultado.nombre} al carrito`);
    guardarCarrito();
  }
};

// SE GUARDA EL CARRITO EN JSON
const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

// SE RECUPERA EL CARRITO PARA PODER AGREGAR MAS PRODUCTOS
const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  }
};
botonDeBusqueda();
cargarProductos();
cargarProductosNuevos();
recuperarCarrito();
