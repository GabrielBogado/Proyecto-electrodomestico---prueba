const tbody = document.querySelector("tbody");
let totalCarrito;

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
             <td class="totalProducto">${totalCarrito * IVA.toFixed(2)}</td>
           </tr>`;
}
sumaCarrito();

// FUNCION DONDE SE BUSCA EL INDICE Y SE ELIMINA PRODUCTO DEL CARRITO
const quitarDeCarrito = (e) => {
  let eliminado = carrito.find((producto) => producto.nombre === e.target.id);
  let posicion = carrito.indexOf(eliminado);
  if (posicion > -1) {
    carrito.splice(posicion, 1);
    toast(`Se elimino ${eliminado.nombre} del carrito`);
    guardarCarrito();
    cargaTablaCarrito();
  }
};

// RECUPERO EL CARRITO Y SE PREGUNTA SI SE QUIERE ELIMINAR O SEGUIR CON EL CARRITO GUARDADO

const recuperarCarrito = () => {
  if (localStorage.getItem("carrito")) {
    Swal.fire({
      title: "Hay un carrito guardado, ¿Desea recuperarlo?",
      text: "",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
        carritoRecuperado.forEach((producto) => carrito.push(producto));
        cargaTablaCarrito();
      } else if (result.isDismissed) {
        localStorage.clear();
        toast("El carrito se borro con Exito");
      }
    });
  }
};

recuperarCarrito();
cargaTablaCarrito();
