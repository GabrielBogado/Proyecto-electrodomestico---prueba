function separador() {
  let acceso = confirm("¿Usted es vendedor?");
  if (acceso) {
    console.log("A CONTINUACION COMENZARA A AGREGAR PRODUCTOS");
    agregarProducto();
  } else {
    cliente();
  }
}


separador();

function cliente() {
  let nombrePers = prompt(
    "Ingrese su nombre para una asistencia personalizada: "
  );
  console.log("Bienvenid@", nombrePers);
  let eleccion = prompt(
      "¿Que esta buscando para combatir el Verano ?: \n- Aire Acondicionado \n- Ventilador \n- Salir"
    ).toUpperCase();
  if (eleccion == "SALIR") {
    let salida = confirm("¿Seguro que desea salir?")
    if(salida) {
      console.log("GRACIAS POR SU VISITA")
      separador()
    } else {
      cliente()
    }
  } else {
    let resultado = productos.filter((elemento) =>
      elemento.tipo.includes(eleccion)
    );
    console.table(resultado);
  }
}

/* function menu(opcion) {
  switch (opcion) {
    case 1:
      let aire = parseInt(
        prompt(
          "Que tipo de aire acondicionado quiere?: \n1) Aire Ventana \n2) Aire Split \n3) Volver al menu"
        )
      );
      if (aire == 1) {
        console.log("eleccion del aire ventana");
      } else if (aire == 2) {
        console.log("eleccion de aire split");
      } else {
        inicio();
      }
      break;
    case 2:
      let venti = parseInt(
        prompt(
          "Que tipo de ventilador quiere?: \n1) Ventilador de pie \n2) Ventilador de techo \n3) Ventilador de pared \n4) Ventilador 3 en 1 \n5) Volver al menu"
        )
      );
      if (venti == 1) {
        console.log("Usted selecciono ventilador de pie");
      } else if (venti == 2) {
        console.log("Usted selecciono ventilador de techo");
      } else if (venti == 3) {
        console.log("Usted selecciono ventilador de pared");
      } else if (venti == 4) {
        console.log("Usted selecciono ventilador 3 en 1");
      } else {
        inicio();
      }
  }
} */

function agregarProducto() {
  let nombre = prompt("Ingrese nombre del producto:").toUpperCase();
  let precio = parseInt(prompt("Ingrese precio:"));
  let stock = parseInt(prompt("Ingrese stock disponible:"));
  let tipo = prompt("Ingrese tipo de producto").toUpperCase();

  productos.push(new Producto(nombre, precio, stock, tipo));
  let seguirAgregando = confirm("¿Desea seguir agregando productos?");
  if (seguirAgregando) {
    agregarProducto();
  } else {
    listarProductos();
    separador();
  }
}

function listarProductos() {
  console.table(productos);
}
