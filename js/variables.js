const productos = [];
const carrito = [];

function generadorStock() {
  productos.push(new Producto("BGH SILENT AIR", 72000, 14, "AIRE VENTANA", "🔥"));
  productos.push(new Producto("BGH TURBO AIR", 102000, 10, "AIRE SPLIT", "🔥"));
  productos.push(new Producto("SURREY XCOLD", 120000, 25, "AIRE VENTANA", "🔥"));
  productos.push(new Producto("NEX FREE AIR", 89000, 22, "AIRE VENTANA", "🔥"));
  productos.push(new Producto("SANSEI INVERTER", 132000, 8, "AIRE SPLIT", "🔥"));
  productos.push(new Producto("PHILCO 2881", 96000, 15, "AIRE SPLIT", "🔥"));
  productos.push(new Producto("TCL ELITE", 93000, 12, "AIRE SPLIT", "🔥"));
  productos.push(new Producto("LILIANA VP16P", 12600, 18, "VENTILADOR DE PIE", "🔥"));
  productos.push(new Producto("INDELPLAS IV16", 7200, 4, "VENTILADOR DE PIE", "🔥"));
  productos.push(
    new Producto("PEABODY PE-VTR42", 31800, 19, "VENTILADOR DE TECHO", "🔥")
  );
  productos.push(
    new Producto("KANJI KJH-FH1209", 10900, 23, "VENTILADOR 3 EN 1", "🔥")
  );
  productos.push(
    new Producto("AXEL AX-VTPOTAR", 25900, 15, "VENTILADOR DE TECHO", "🔥")
  );
  productos.push(
    new Producto("LILIANA VWC2016", 17300, 12, "VENTILADOR DE PARED", "🔥")
  );
}

generadorStock();
