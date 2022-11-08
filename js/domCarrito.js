const tbody = document.querySelector("tbody");
let totalCarrito;
const carrito = [];

//FUNCION QUE ACTIVA EL BOTON DE ELIMINAR PRODUCTO
const activarBotonesEliminar = () => {
  const botonEliminar = document.querySelectorAll(".button.botonEliminar");
  botonEliminar.forEach((btn) =>
    btn.addEventListener("click", (e) => quitarDeCarrito(e))
  );
};

// GUARDO EL CARRITO
const guardarCarrito = () => {
  if (carrito.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
};

// FUNCION DONDE SE CARGA LA TABLA DEL CARRITO
const cargaTablaCarrito = () => {
  if (localStorage.getItem("carrito")) {
    tbody.innerHTML = "";
    carrito.forEach((producto) => (tbody.innerHTML += tablaCarrtito(producto)));
    sumaCarrito();
    activarBotonesEliminar();
  }
};

// SUMA DE CARRITO Y TOTAL
function sumaCarrito() {
  totalCarrito = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
  tbody.innerHTML += `<tr>
             <td></td>
             <td>TOTAL:</td>
             <td class="totalProducto">${totalCarrito.toFixed(2)}</td>
           </tr>`;
}
sumaCarrito();

// FUNCION DONDE SE BUSCA EL INDICE Y SE ELIMINA PRODUCTO DEL CARRITO
const quitarDeCarrito = (e) => {
  let eliminado = carrito.find((producto) => producto.nombre === e.target.id);
  let posicion = carrito.indexOf(eliminado);
  if (posicion > -1) {
    let elementoQuitado = carrito.splice(posicion, 1);
    restaCarrito();
  }
};

// INTENTO DE RESTAR PRODUCTOS DEL PRECIO TOTAL
const restaCarrito = () => {
  totalCarrito = carrito.reduce((acc, elemento) => elemento.precio - acc, 0);
  console.log("El nuevo total es:", totalCarrito);
  guardarCarrito();
  cargaTablaCarrito();
};

// RECUPERO EL CARRITO Y SE PREGUNTA SI SE QUIERE ELIMINAR O SEGUIR CON EL CARRITO GUARDADO
const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    let preguntaRecuperar = confirm(
      "Hay un carrito guardado, ¿Desea recuperarlo?"
    );
    if (preguntaRecuperar) {
      let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
      carritoRecuperado.forEach((producto) => carrito.push(producto));
    } else {
      localStorage.clear();
      alert("El carrito se borro");
    }
  }
};

recuperarCarrito();
cargaTablaCarrito();
