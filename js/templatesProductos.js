//TEMPLATES PARA ARMAR LA ESTRUCTURA DE HTML CON JS
const retornoCards = (array) => {
  return `<div class="tarjetas">
                <div class="tarjetaImagen">${array.imagen}</div>
                <div class="tarjetaNombre">${array.nombre}</div>
                <div class="tarjetaPrecio">$ ${array.precio}</div>
                <div class="tarjetaTipo">${array.tipo}</div>
                <div class="tarjetaBoton">
                    <button class="button button-outline button-add" id="${array.nombre}" title="Click para agregar el '${array.nombre}' al carrito">+</button>
                </div>                
             </div>`;
};

const retornoError = () => {
  return `<div class="tarjetaError">
                <h2>Hemos tenido un problemas al cargar los productos 🧨</h2>
                <h3>Porfavor intenta en unos instantes nuevamente...</h3>
            </div>`;
};
