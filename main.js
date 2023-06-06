// ARRAY DE PRODUCTOS

let productos = [
  {
    id: 101,
    nombre: "Avocado Toast",
    categoria: "desayunos y meriendas",
    precio: 1500,
    stock: 20,
    descripcion:"Toast Tostón, palta y huevo acompañado de tomates cherry.",
    img: ""
  },

  {
    id: 102,
    nombre: "French Toast",
    categoria: "desayunos y meriendas",
    precio: 1250,
    stock: 20,
    descripcion:"Dos tostadas francesas acompañadas de frutas de estación y caramelo.",
    img: ""
  },
  {
    id: 103,
    nombre: "Huevos Revueltos",
    categoria: "desayunos y meriendas",
    precio: 1050,
    stock: 20,
    descripcion:"Huevos revueltos con toston, panceta o palta acompañado de tomates cherrys.",
    img: ""
  },
  {
    id: 104,
    nombre: "Croissant relleno",
    categoria: "desayunos y meriendas",
    precio: 1000,
    stock: 20,
    descripcion:"Croissant De jamón y queso.",
    img: ""
  },
  {
    id: 105,
    nombre: "Yogur de la casa",
    categoria: "desayunos y meriendas",
    precio: 1800,
    stock: 20,
    descripcion:"Yogur con Granola Casera y Frutas de Estación Yogur casero, granola y frutas de estación.",
    img: ""
  },
  {
    id: 106,
    nombre: "Tostadas",
    categoria: "desayunos y meriendas",
    precio: 900,
    stock: 20,
    descripcion:"Dos tostadas acompañadas de queso crema y mermelada.",
    img: ""
  },
  {
    id: 107,
    nombre: "Pancake Proteico",
    categoria: "desayunos y meriendas",
    precio: 1150,
    stock: 20,
    descripcion:"Pancake de avena y banana con matequilla de maní, mermelada, frutas de estación y caramelo.",
    img: ""
  },
  
  {
    id: 108,
    nombre: "Sandwich de Crudo Jamón crudo",
    categoria: "desayunos y meriendas",
    precio: 1550,
    stock: 20,
    descripcion:"Sandwich de Crudo Jamón crudo, rúcula, tomate y queso.",
    img: ""
  },
  {
    id: 109,
    nombre: "Omelette De jamón y queso",
    categoria: "desayunos y meriendas",
    precio: 1750,
    stock: 20,
    descripcion: "Omelette De jamón y queso acompañado de tomates cherry. De queso, tomate y albahaca, acompañado de tomates cherry." , 
    img: ""
  },

{
    id: 201,
    nombre: "Hamburguesas Tranca la Palanca",
    categoria: "Platos principales",
    precio: 2000,
    stock: 20,
    descripcion:"Dos medallones de carne, panceta, cebolla caramelizada, queso cheddar y huevo.",
    img: ""
  },
  {
    id: 202,
    nombre: "Veggie burguer",
    categoria: "Platos principales",
    precio: 2050,
    stock: 20,
    descripcion:"Hamburguesa vegetariana cebolla caramelizada, queso danbo, palta y mayonesa de zanahoria.",
    img: ""
  },
  {
    id: 203,
    nombre: "Ravioles",
    categoria: "Platos principales",
    precio: 2100,
    stock: 20,
    descripcion:"Ravioles rellenos, a elección, sea de ricotta, sea jamón y queso, sea de pollo con salsa a elección.",
    img: ""
  },
  {
    id: 204,
    nombre: "Wrap Veggie",
    categoria: "Platos principales",
    precio: 2150,
    stock: 20,
    descripcion:"Verduras salteadas, queso crema con ciboulette, huevo y palta.",
    img: ""
  },
  {
    id: 205,
    nombre: "Wrap Pollo",
    categoria: "Platos principales",
    precio: 2200,
    stock: 20,
    descripcion:"Pollo, queso crema con ciboulette, cebolla caramelizada, palta y espinaca.",
    img: ""
  },
  {
    id: 206,
    nombre: "Wrap Pulled Pork",
    categoria: "Platos principales",
    precio: 2250,
    stock: 20,
    descripcion:"Bondiola braseada con barbacoa y coleslaw.",
    img: ""
  },
  {
    id: 207,
    nombre: "Ensaladas Cesar",
    categoria: "Platos principales",
    precio: 2300,
    stock: 20,
    descripcion:"Lechuga, pollo, queso, croutones y salsa cesar.",
    img: ""
  },
   {
    id: 208,
    nombre: "Ensalada Cobb",
    categoria: "Platos principales",
    precio: 2350,
    stock: 20,
    descripcion:"Verdes, pollo, panceta, queso azul, palta y tomate.",
    img: ""
  },
  {
    id: 301,
    nombre: "Tiramisú",
    categoria: "Tortas, postres y delicias",
    precio: 1000,
    stock: 20,
    descripcion:"Clásico postre italiano con vainillas, almíbar de café y crema mascarpone.",
    Formato: "porción individual",
    img: ""
  },
  {
    id: 302,
    nombre: "Rogel",
    categoria: "Tortas, postres y delicias",
    precio: 1100,
    stock: 20,
    descripcion:"Especialidad de la casa con más de 10 capas de masa y dulce de leche bajo una montaña de merengue.",
    img: ""
  },
  {
    id: 303,
    nombre: "Marquise",
    categoria: "Tortas, postres y delicias",
    precio: 1150,
    stock: 20,
    descripcion:"Base bombón de chocolate con dulce de leche y merengue.",
    img: ""
  },
  {
    id: 304,
    nombre: "Lemon pie",
    categoria: "Tortas, postres y delicias",
    precio: 1200,
    stock: 20,
    descripcion:"Clásico internacional si los hay: tarta de limón y merengue.",
    img: ""
  },
  {
    id: 305,
    nombre: "Key Lime Pie",
    categoria: "Tortas, postres y delicias",
    precio: 1250,
    stock: 20,
    descripcion:"Torta de crema de jugo de limas y leche condensada en su base de cookie crumbs.",
    img: ""
  },
  {
    id: 306,
    nombre: "Cheesecake",
    categoria: "Tortas, postres y delicias",
    precio: 1300,
    stock: 20,
    descripcion:"Cheesecake de chocolate blanco, bañada en salsa de frutos rojos.",
    img: ""
  },
  {
    id: 307,
    nombre: "Alfajores",
    categoria: "Tortas, postres y delicias",
    precio: 1350,
    stock: 20,
    descripcion:"Alfajor gigante relleno de dulce de leche, a elección: maicena, chocolate negro o blanco, de nuezo o almendra",
    img: ""
  },
   {
    id: 308,
    nombre: "Carrot Cake",
    categoria: "Tortas, postres y delicias",
    precio: 1400,
    stock: 20,
    descripcion:"Esponjoso bizcochuelo a base de zanahoria dulce, relleno de frutos secos y pasas de uva y relleno de crema unctuosa especial.",
    img: ""
  },
]




// ******************************************************************************************************

// INGRESO DE NUEVOS PRODUCTOS


let nuevoProducto = {};

let id = prompt("Ingrese ID del producto");
let nombre = prompt("Ingrese nombre del producto");
let categoria = prompt("Ingrese la categoría asignada al producto");
let precio = Number(prompt("Ingrese precio del producto:"));
let stock = Number(prompt("Ingrese unidades en stock del producto:"));
let descripcion = prompt("Ingrese una descripción o reseña del producto");

nuevoProducto.id = id;
nuevoProducto.nombre = nombre;
nuevoProducto.categoria = categoria;
nuevoProducto.precio = precio;
nuevoProducto.stock = stock;
nuevoProducto.descripcion = descripcion;

productos.push(nuevoProducto);

console.log(productos);

let salida = "El listado completo de productos existentes es el siguiente:\n";

for (const producto of productos) {
  salida += `ID: ${producto.id}\nNombre: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: ${producto.precio}\n\n`;
}

alert(salida);


// ******************************************************************************************************

// ACTUALIZACION DE PRECIOS
// Función para aumentar el precio individualmente de un producto por un valor específico
function aumentarPrecioIndividual(id, aumento) {
  const producto = productos.find((p) => p.id === id);

  if (producto) {
    producto.precio += aumento;
    console.log(`El precio del producto ${producto.nombre} se ha incrementado en ${aumento}`);
  } else {
    console.log(`No se encontró ningún producto con el ID ${id}`);
  }
}

// Ejemplo de uso
aumentarPrecioIndividual(101, 500); // Aumentar el precio del producto con ID 101 en 500
console.log(productos);


// Función para aumentar el precio de todos los productos en base a un porcentaje
function aumentarPrecioGeneral(porcentaje) {
  productos.forEach((producto) => {
    producto.precio += (producto.precio * porcentaje) / 100;
  });

  console.log(`Se ha aumentado el precio de todos los productos en ${porcentaje}%`);
}

// Solicitar cambio de valores mediante prompt
const opcion = Number(prompt("Seleccione una opción:\n1. Aumentar precio individualmente\n2. Aumentar precio general"));

if (opcion === 1) {
  const id = Number(prompt("Ingrese el ID del producto"));
  const aumento = Number(prompt("Ingrese el valor de aumento"));

  aumentarPrecioIndividual(id, aumento);
  console.log(productos);
} else if (opcion === 2) {
  const porcentaje = Number(prompt("Ingrese el porcentaje de aumento"));

  aumentarPrecioGeneral(porcentaje);
  console.log(productos);
} else {
  console.log("Opción inválida");
}

// ******************************************************************************************************
// SIMULADOR DE REGISTRO DE USUARIO E INICIO DE SESION 


/*

// Registro de nuevo usuario I (simplificado)
function registrarUsuario() {
  const codigoUsuario = prompt("Ingrese un código de usuario");

  codigoUsuarioGlobal = codigoUsuario;

  console.log(`Usuario registrado correctamente. Código de usuario: ${codigoUsuario}`);
}
*/

// Registro de nuevo usuario II (complejo)

let usuariosRegistrados = []; // Array para almacenar los usuarios registrados

// Función para registrar un nuevo usuario
function registrarUsuario() {
  let nombreUsuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  // Verificar si el usuario ya está registrado
  let usuarioExistente = usuariosRegistrados.find(
    (usuario) => usuario.nombreUsuario === nombreUsuario
  );

  if (usuarioExistente) {
    console.log("El usuario ya está registrado. Por favor, inicie sesión.");
    alert("El usuario ya está registrado. Por favor, inicie sesión.");
  } else {
    usuariosRegistrados.push({ nombreUsuario, contraseña });
    console.log("Registro exitoso. Por favor, inicie sesión.");
    alert("Registro exitoso. Por favor, inicie sesión.")
  }
}

// Función para iniciar sesión
function iniciarSesion() {
  let nombreUsuario = prompt("Ingrese su nombre de usuario:");
  let contraseña = prompt("Ingrese su contraseña:");

  // Verificar si el usuario y la contraseña coinciden
  let usuarioRegistrado = usuariosRegistrados.find(
    (usuario) =>
      usuario.nombreUsuario === nombreUsuario && usuario.contraseña === contraseña
  );

  if (usuarioRegistrado) {
    console.log("Inicio de sesión exitoso. ¡Bienvenido!");
    // Aquí puedes redirigir al usuario a la parte del simulador correspondiente
  } else {
    console.log("Nombre de usuario o contraseña incorrectos. Inténtelo nuevamente.");
    alert("Nombre de usuario o contraseña incorrectos. Inténtelo nuevamente.")
  }
}

// Ejemplo de uso
registrarUsuario(); // Registra un nuevo usuario
iniciarSesion(); // Inicia sesión con el usuario registrado

// *************************************************************************************************************
// CARRITO VIRTUAL

// Función para mostrar la lista completa de productos
function mostrarListaCompleta() {
  console.log("Lista completa de productos:");
  productos.forEach((producto) => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: ${producto.precio}`);
  });
}

// Función para mostrar la lista de productos por categoría
function mostrarListaPorCategoria(categoria) {
  console.log(`Lista de productos en la categoría "${categoria}":`);
  const productosCategoria = productos.filter((producto) => producto.categoria === categoria);
  productosCategoria.forEach((producto) => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
  });
}

// Función para mostrar un producto por ID
function mostrarProductoPorId(id) {
  const producto = productos.find((p) => p.id === id);

  if (producto) {
    console.log(`Producto encontrado. Detalles:\nID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
  } else {
    console.log(`No se encontró ningún producto con el ID ${id}`);
  }
}

// Función para mostrar productos dentro de un rango de precios
function mostrarProductosPorRangoDePrecios(precioMin, precioMax) {
  console.log(`Productos dentro del rango de precios ${precioMin} - ${precioMax}:`);
  const productosRango = productos.filter((producto) => producto.precio >= precioMin && producto.precio <= precioMax);
  productosRango.forEach((producto) => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
  });
}


// Función para agregar artículos a la orden de compra
let ordenDeCompra = [];

function agregarArticuloALaOrden() {
  let idArticulo = prompt("Ingrese el ID del artículo que desea agregar a la orden:");

  // Buscar el artículo por su ID en el array de productos
  let articuloEncontrado = productos.find((producto) => producto.id === Number(idArticulo));

  if (articuloEncontrado) {
    // Verificar si el artículo está disponible en el stock
    if (articuloEncontrado.stock > 0) {
      ordenDeCompra.push(articuloEncontrado);
      articuloEncontrado.stock--; // Reducir el stock del artículo en 1
      console.log("Artículo agregado a la orden de compra correctamente.");
    } else {
      console.log("El artículo seleccionado no está disponible en el stock.");
    }
  } else {
    console.log("No se encontró ningún artículo con el ID ingresado.");
  }
}




// Función para mostrar el listado final de la orden de compra
function mostrarListadoFinalOrdenDeCompra() {
  console.log("Listado final de la orden de compra:");

    for (const producto of ordenDeCompra) {
    const cantidad = 1; // Cada producto tiene una cantidad de 1 en este caso
    const subtotal = producto.precio * cantidad;
    console.log(`Producto: ${producto.nombre}, Cantidad: ${cantidad}, Subtotal: ${subtotal}`);
  }

}



// Función para buscar productos ------LPMQMP, es 1 prng, sigue sin funcionar!!!!!!!!!!!!! Ojalá se muera




function buscarProductos() {
  let criterio = prompt("Ingrese el criterio de búsqueda:");

  // Filtrar los productos según el criterio ingresado
  let productosFiltrados = productos.filter((producto) => {
    // Convertir todas las propiedades a minúsculas para realizar una búsqueda sin distinción de mayúsculas o minúsculas
    let categoria = producto.categoria.toLowerCase();
    let nombre = producto.nombre.toLowerCase();
    let descripcion = producto.descripcion.toLowerCase();

    // Verificar si alguna propiedad coincide con el criterio de búsqueda
    return (
      categoria.includes(criterio.toLowerCase()) ||
      nombre.includes(criterio.toLowerCase()) ||
      descripcion.includes(criterio.toLowerCase())
    );
  });

  // Mostrar los productos filtrados
  if (productosFiltrados.length > 0) {
    console.log("Resultados de la búsqueda:");
    productosFiltrados.forEach((producto) => {
      console.log(`ID: ${producto.id}`);
      console.log(`Nombre: ${producto.nombre}`);
      console.log(`Categoría: ${producto.categoria}`);
      console.log(`Precio: ${producto.precio}`);
      console.log(`Descripción: ${producto.descripcion}`);
      console.log("----------------------");
    });
  } else {
    console.log("No se encontraron resultados para el criterio de búsqueda ingresado.");
  }
}


// Código de usuario global
let codigoUsuarioGlobal;


// Iniciar el simulador de compras
simuladorDeCompras();

// Simulador de compras
function simuladorDeCompras() {
  // Registro de nuevo usuario
  registrarUsuario();

  // Opciones del simulador
  while (true) {
    const opcion = Number(prompt(`Simulador de compras\nSeleccione una opción:\n1. Lista de productos completa\n2. Lista de productos por categoría\n3. Lista de productos por ID\n4. Rango de precios\n5. Agregar artículos a la orden de compra\n6. Listado final de la orden de compra\n7. Buscar productos\n0. Salir`));

    switch (opcion) {
      case 1:
        mostrarListaCompleta();
        break;
      case 2:
        const categoria = prompt("Ingrese la categoría");
        mostrarListaPorCategoria(categoria);
        break;
      case 3:
        const idProducto = Number(prompt("Ingrese el ID del producto"));
        mostrarProductoPorId(idProducto);
        break;
      case 4:
        const precioMin = Number(prompt("Ingrese el precio mínimo"));
        const precioMax = Number(prompt("Ingrese el precio máximo"));
        mostrarProductosPorRangoDePrecios(precioMin, precioMax);
        break;
        
      case 5:
        agregarArticuloALaOrden();
        break;
      case 6:
        mostrarListadoFinalOrdenDeCompra();
        break;

      case 7:
        buscarProductos();
        break;
      case 0:
        console.log("Simulador de compras finalizado");
        return;
      default:
        console.log("Opción inválida");
    }
  }
}






