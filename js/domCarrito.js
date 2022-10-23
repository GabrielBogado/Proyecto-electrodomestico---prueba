const tbody = document.querySelector("tbody");

const activarBotonesEliminar = () => {
  const botonEliminar = document.querySelectorAll(".button.botonEliminar");
  botonEliminar.forEach((btn) =>
    btn.addEventListener("click", (e) => quitarDeCarrito(e))
  );
};

const guardarCarrito = () => {
  if (carrito.length >= 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

const cargaTablaCarrito = () => {
  if (localStorage.getItem("carrito")) {
    tbody.innerHTML = "";
    carrito.forEach((producto) => (tbody.innerHTML += tablaCarrtito(producto)));
  } else {
    alert("No se encontro ningun carrito");
  }
};

const quitarDeCarrito = (e) => {
  let eliminado = carrito.find((producto) => producto.nombre === e.target.id);
  let posicion = carrito.indexOf(eliminado);
  if (posicion > -1) {
    let elementoQuitado = carrito.splice(posicion, 1);
    restaCarrito();
  }
};

const restaCarrito = () => {
  totalCarrito = carrito.reduce((acc, elemento) => acc - elemento.precio, 0);
  console.log("El nuevo total es:", totalCarrito);
  guardarCarrito();
  cargaTablaCarrito();
};
const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  } else {
    console.warn("No se encontro un carrito guardado");
  }
};

recuperarCarrito(); 
cargaTablaCarrito();
activarBotonesEliminar();
