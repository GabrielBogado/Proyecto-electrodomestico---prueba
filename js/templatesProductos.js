//TEMPLATES PARA ARMAR LA ESTRUCTURA DE HTML CON JS
const retornoCards = (producto) => {
  return `<div class="tarjetas">
                <div class="tarjetaImagen">${producto.imagen}</div>
                <div class="tarjetaNombre">${producto.nombre}</div>
                <div class="tarjetaPrecio">$ ${producto.precio}</div>
                <div class="tarjetaTipo">${producto.tipo}</div>
                <div class="tarjetaBoton">
                    <button class="button button-outline button-add" id="${producto.nombre}" title="Click para agregar el '${producto.nombre}' al carrito">+</button>
                </div>                
             </div>`;
};

const retornoError = () => {
  return `<div class="tarjetaError">
                <h2>Hemos tenido un problemas al cargar los productos 🧨</h2>
                <h3>Porfavor intenta en unos instantes nuevamente...</h3>
            </div>`;
};
