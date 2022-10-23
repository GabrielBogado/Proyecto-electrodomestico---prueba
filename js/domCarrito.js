const tbody = document.querySelector("tbody");

const activarBotonesEliminar = () => {
  const botonEliminar = document.querySelectorAll(".button.botonEliminar");
  botonEliminar.forEach((btn) =>
    btn.addEventListener("click", (e) =>
      /* quitarDeCarrito(e) */ console.log("presionaste el boton", e.target.id)
    )
  );
};

const quitarDeCarrito = () => {};

const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    carritoRecuperado.forEach((producto) => carrito.push(producto));
  } else {
    console.warn("No se encontro un carrito guardado");
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
recuperarCarrito();
cargaTablaCarrito();
activarBotonesEliminar();
