// Tenemos un li de productos
// Definición del arreglo de productos con sus atributos
const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Selección de elementos en el DOM
const listaProductos = document.getElementById("lista-de-productos"); // Utilizar getElementById para seleccionar un único elemento
const inputBusqueda = document.querySelector('.input');
const botonDeFiltro = document.querySelector("button");

// Función para mostrar productos en la lista
function displayProductos(productos) {
    // Limpiar el contenedor de productos antes de añadir nuevos
    listaProductos.innerHTML = '';

    // Crear y añadir los productos al contenedor
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");

        const titulo = document.createElement("p");
        titulo.classList.add("titulo");
        titulo.textContent = producto.nombre;

        const imagen = document.createElement("img");
        imagen.setAttribute('src', producto.img);

        divProducto.appendChild(titulo);
        divProducto.appendChild(imagen);
        listaProductos.appendChild(divProducto);
    });
}

// Función para filtrar productos según el texto de búsqueda
function filtrarProductos() {
    const texto = inputBusqueda.value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios
    const productosFiltrados = productos.filter(
        producto => producto.tipo.includes(texto) || producto.color.includes(texto)
    );
    displayProductos(productosFiltrados);
}

// Inicializar la visualización con todos los productos
displayProductos(productos);

// Asignar la función de filtrado al evento onclick del botón
botonDeFiltro.onclick = filtrarProductos;
