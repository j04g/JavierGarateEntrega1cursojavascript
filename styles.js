////////////////////////// REGISTRO DE USUARIO

// Obtener referencias de los elementos del formulario
const registroForm = document.getElementById("registro-form");
const loginForm = document.getElementById("login-form");
const datosPersonalesForm = document.getElementById("datos-personales-form");
const welcomeUsername = document.getElementById("welcome-username");
const sesionContainer = document.getElementById("sesion-container");
const datosPersonalesContainer = document.getElementById("datos-personales-container");

// Agregar un controlador de eventos para el formulario de registro
registroForm.addEventListener("submit", function (event) {
  event.preventDefault();

// Obtener los valores ingresados en el formulario de registro
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

// Guardar los datos en el almacenamiento local (se puede modificar para almacenarlo en una base de datos, d.o.m. cambiar por sessionStorage)
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);

  // Mostrar el formulario de inicio de sesión y actualizar el mensaje de bienvenida
  welcomeUsername.textContent = username;
  sesionContainer.classList.remove("hidden");
});


// Agregar un controlador de eventos para el formulario de inicio de sesión
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los valores ingresados en el formulario de inicio de sesión
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;

  // Obtener los datos de registro almacenados en el almacenamiento local
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  // Verificar si el usuario y la contraseña coinciden
  if (loginUsername === username && loginPassword === password) {
    // Agregar el prompt para obtener el nombre de usuario registrado
    const message = `Bienvenido ${username}, te has sesionado correctamente. Antes de empezar tu compra debes completar el formulario de datos.`;
    alert(message);
  } else {
    alert("El usuario o la contraseña ingresados son incorrectos.");
  }
});



// Agregar un controlador de eventos para el formulario de datos personales
datosPersonalesForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los valores ingresados en el formulario de datos personales
  const modalidadPago = document.getElementById("modalidad-pago").value;
  const cbuTarjeta = document.getElementById("cbu-tarjeta").value;
  const tresDigitos = document.getElementById("tres-digitos").value;
  const opcionesEnvio = document.getElementById("opciones-envio").value;

  // Guardar los datos adicionales en el almacenamiento local (puedes modificarlo para almacenarlo en una base de datos)
  localStorage.setItem("modalidadPago", modalidadPago);
  localStorage.setItem("cbuTarjeta", cbuTarjeta);
  localStorage.setItem("tresDigitos", tresDigitos);
  localStorage.setItem("opcionesEnvio", opcionesEnvio);

  alert("Los datos personales se han guardado correctamente.");
});

// Agregar un controlador de eventos para el botón "Restablecer" del formulario de datos personales
datosPersonalesForm.addEventListener("reset", function () {
  // Limpiar los datos almacenados en el almacenamiento local
  localStorage.removeItem("modalidadPago");
  localStorage.removeItem("cbuTarjeta");
  localStorage.removeItem("tresDigitos");
  localStorage.removeItem("opcionesEnvio");

  alert("Los datos personales se han restablecido.");
});



////////////////////////////// ARRAY DE PRODUCTOS

// ARRAY DE PRODUCTOS



let productos = [
  {
    id: 101,
    nombre: "Avocado Toast",
    categoria: "desayunos y meriendas",
    precio: 1500,
    stock: 20,
    descripcion:"Toast Tostón, palta y huevo acompañado de tomates cherry.",
    img: "images/avocado toast.jpg"
  },

  {
    id: 102,
    nombre: "French Toast",
    categoria: "desayunos y meriendas",
    precio: 1250,
    stock: 20,
    descripcion:"Dos tostadas francesas acompañadas de frutas de estación y caramelo.",
    img: "images/french-toast-3.jpeg"
  },
  {
    id: 103,
    nombre: "Huevos Revueltos",
    categoria: "desayunos y meriendas",
    precio: 1050,
    stock: 20,
    descripcion:"Huevos revueltos con toston, panceta o palta acompañado de tomates cherrys.",
    img: "images/huevos revueltos.jpg"
  },
  {
    id: 104,
    nombre: "Croissant relleno",
    categoria: "desayunos y meriendas",
    precio: 1000,
    stock: 20,
    descripcion:"Croissant De jamón y queso.",
    img: "images/croissant.jpg"
  },
  {
    id: 105,
    nombre: "Yogur de la casa",
    categoria: "desayunos y meriendas",
    precio: 1800,
    stock: 20,
    descripcion:"Yogur con Granola Casera y Frutas de Estación Yogur casero, granola y frutas de estación.",
    img: "images/Granola bowl.jpg"
  },
  {
    id: 106,
    nombre: "Tostadas",
    categoria: "desayunos y meriendas",
    precio: 900,
    stock: 20,
    descripcion:"Dos tostadas acompañadas de queso crema y mermelada.",
    img: "images/tostado-jam-cheese-argentina-jamon-y-queso.jpg"
  },
  {
    id: 107,
    nombre: "Pancake Proteico",
    categoria: "desayunos y meriendas",
    precio: 1150,
    stock: 20,
    descripcion:"Pancake de avena y banana con matequilla de maní, mermelada, frutas de estación y caramelo.",
    img: "images/pancake.jpg"
  },
  
  {
    id: 108,
    nombre: "Sandwich de Crudo Jamón crudo",
    categoria: "desayunos y meriendas",
    precio: 1550,
    stock: 20,
    descripcion:"Sandwich de Crudo Jamón crudo, rúcula, tomate y queso.",
    img: "images/sandwich crudo.jpg"
  },
  {
    id: 109,
    nombre: "Omelette De jamón y queso",
    categoria: "desayunos y meriendas",
    precio: 1750,
    stock: 20,
    descripcion: "Omelette De jamón y queso acompañado de tomates cherry. De queso, tomate y albahaca, acompañado de tomates cherry." , 
    img: "images/omelette.jpg"
  },

{
    id: 201,
    nombre: "Hamburguesas Tranca la Palanca",
    categoria: "Platos principales",
    precio: 2000,
    stock: 20,
    descripcion:"Dos medallones de carne, panceta, cebolla caramelizada, queso cheddar y huevo.",
    img: "images/hamburguesa.jpg"
  },
  {
    id: 202,
    nombre: "Veggie burguer",
    categoria: "Platos principales",
    precio: 2050,
    stock: 20,
    descripcion:"Hamburguesa vegetariana cebolla caramelizada, queso danbo, palta y mayonesa de zanahoria.",
    img: "images/veggie burger.jpg"
  },
  {
    id: 203,
    nombre: "Ensalada Caesar",
    categoria: "Platos principales",
    precio: 2100,
    stock: 20,
    descripcion:"Ensalada, pollo, tomates, queso parmesano, semillas, croutones y vinagreta especial de mayonesa y anchoas.",
    img: "images/CaesarSalad.jpg"
  },
  {
    id: 204,
    nombre: "Wrap Veggie",
    categoria: "Platos principales",
    precio: 2150,
    stock: 20,
    descripcion:"Verduras salteadas, queso crema con ciboulette, huevo y palta.",
    img: "images/wrap veggie.jpg"
  },
  {
    id: 205,
    nombre: "Wrap Pollo",
    categoria: "Platos principales",
    precio: 2200,
    stock: 20,
    descripcion:"Pollo, queso crema con ciboulette, cebolla caramelizada, palta y espinaca.",
    img: "images/wrap.jpg"
  },
  {
    id: 206,
    nombre: "Wrap Pulled Pork",
    categoria: "Platos principales",
    precio: 2250,
    stock: 20,
    descripcion:"Bondiola braseada con barbacoa y coleslaw.",
    img: "images/wrap pulled pork.jpg"
  },
    {
    id: 207,
    nombre: "Ensalada Cobb",
    categoria: "Platos principales",
    precio: 2350,
    stock: 20,
    descripcion:"Verdes, pollo, panceta, queso azul, palta y tomate.",
    img: "images/cobb-salad.jpg"
  },
  {
    id: 301,
    nombre: "Tiramisú",
    categoria: "Tortas, postres y delicias",
    precio: 1000,
    stock: 20,
    descripcion:"Clásico postre italiano con vainillas, almíbar de café y crema mascarpone.",
    Formato: "porción individual",
    img: "images/Tiramisu.jpg"
  },
  {
    id: 302,
    nombre: "Rogel",
    categoria: "Tortas, postres y delicias",
    precio: 1100,
    stock: 20,
    descripcion:"Especialidad de la casa con más de 10 capas de masa y dulce de leche bajo una montaña de merengue.",
    img: "images/rogell.jpg"
  },
  {
    id: 303,
    nombre: "Marquise",
    categoria: "Tortas, postres y delicias",
    precio: 1150,
    stock: 20,
    descripcion:"Base bombón de chocolate con dulce de leche y merengue.",
    img: "images/marquise.jpg"
  },
  {
    id: 304,
    nombre: "Lemon pie",
    categoria: "Tortas, postres y delicias",
    precio: 1200,
    stock: 20,
    descripcion:"Clásico internacional si los hay: tarta de limón y merengue.",
    img: "images/lemon pie.jpg"
  },
  {
    id: 305,
    nombre: "Key Lime Pie",
    categoria: "Tortas, postres y delicias",
    precio: 1250,
    stock: 20,
    descripcion:"Torta de crema de jugo de limas y leche condensada en su base de cookie crumbs.",
    img: "images/Klp.jpg"
  },
  {
    id: 306,
    nombre: "Cheesecake",
    categoria: "Tortas, postres y delicias",
    precio: 1300,
    stock: 20,
    descripcion:"Cheesecake de chocolate blanco, bañada en salsa de frutos rojos.",
    img: "images/cheesecake.jpg"
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
    img: "images/Carrot cakke.jpg"
  },
]


////////////////////////////// FILTROS

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
  const productosFiltrados = productos.filter(producto => producto.categoria.toUpperCase() === categoria.toUpperCase());
  mostrarProductos(productosFiltrados);
}

// Filtrar productos por rango de precios
function filtrarPorPrecio(minPrecio, maxPrecio) {
  minPrecio = parseFloat(minPrecio);
  maxPrecio = parseFloat(maxPrecio);
  const productosFiltrados = productos.filter(producto => producto.precio >= minPrecio && producto.precio <= maxPrecio);
  mostrarProductos(productosFiltrados);
}


////////////////////////////// CARRITO VIRTUAL


// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  const carritoContainer = document.getElementById("productos-carrito");

  // Crea un elemento div para representar el producto en el carrito
  const productoDiv = document.createElement("div");
  productoDiv.className = "producto-carrito";

  // Crea elementos para mostrar el nombre, precio y descripción del producto
  const nombreElement = document.createElement("h3");
  nombreElement.textContent = producto.nombre;

  const precioElement = document.createElement("p");
  precioElement.textContent = "Precio: $" + producto.precio.toFixed(2);

  const descripcionElement = document.createElement("p");
  descripcionElement.textContent = producto.descripcion;

  // Agrega los elementos al div del producto
  productoDiv.appendChild(nombreElement);
  productoDiv.appendChild(precioElement);
  productoDiv.appendChild(descripcionElement);

  // Agrega el div del producto al contenedor del carrito
  carritoContainer.appendChild(productoDiv);
}

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito() {
  const carritoContainer = document.getElementById("productos-carrito");

  // Vacía el contenido del carrito
  carritoContainer.innerHTML = "";

  // Recorre el array de productos y agrega cada producto al carrito
  for (const producto of productos) {
    agregarAlCarrito(producto);
  }
}

// Ejecuta la función para mostrar los productos en el carrito
mostrarProductosEnCarrito();


// Mostrar productos en el carrito
function mostrarProductos(productos) {
  const carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";

  productos.forEach(producto => {
    const productoCard = document.createElement("div");
    productoCard.className = "producto-card";

    const imagen = document.createElement("img");
    imagen.src = producto.img;
    productoCard.appendChild(imagen);

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;
    productoCard.appendChild(nombre);

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;
    productoCard.appendChild(descripcion);

    const precio = document.createElement("p");
    precio.innerHTML = "Precio: <span>$" + producto.precio + "</span>";
    productoCard.appendChild(precio);

    const stock = document.createElement("p");
    stock.innerHTML = "Stock: <span>" + producto.stock + "</span>";
    productoCard.appendChild(stock);

    const agregarCarrito = document.createElement("a");
    agregarCarrito.href = "#";
    agregarCarrito.className = "agregar-carrito";
    agregarCarrito.textContent = "Agregar al carrito";
    agregarCarrito.addEventListener("click", () => agregarAlCarrito(producto));
    productoCard.appendChild(agregarCarrito);

    carritoElement.appendChild(productoCard);
  });
}

// Variables globales
let carrito = []; // Array para almacenar los productos seleccionados

function agregarAlCarrito(producto) {
  carrito.push(producto);
}

// Función para calcular el monto total del carrito
function calcularMontoTotal() {
  const montoTotal = carrito.reduce((total, producto) => total + producto.precio, 0);
  return montoTotal;
}

// Función para generar un número de orden aleatorio
function generarNumeroOrden() {
  return Math.floor(Math.random() * 1000) + 1;
}

// Función para completar el formulario del carrito
function completarFormulario() {
  const orderNumberInput = document.getElementById('orderNumberInput');
  const finalAmountInput = document.getElementById('finalAmountInput');
  const cartSummaryInput = document.getElementById('cartSummaryInput');

  const numeroOrden = generarNumeroOrden();
  const montoTotal = calcularMontoTotal();
  const productosTexto = carrito.map(producto => producto.nombre).join(', ');

  orderNumberInput.value = numeroOrden;
  finalAmountInput.value = montoTotal;
  cartSummaryInput.value = productosTexto;
}

// Función para realizar la compra
function realizarCompra(event) {
  event.preventDefault();

  alert('Compra realizada con éxito.');

  // Realizar acciones correspondientes a la compra
  // ...

  // Reiniciar el carrito y el formulario
  carrito = [];
  document.getElementById('carritoForm').reset();
}

// Obtener los botones de agregar al carrito
const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');

// Asignar el evento click a cada botón de agregar al carrito
agregarCarritoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const nombre = button.dataset.nombre;
    const precio = parseFloat(button.dataset.precio);

    const producto = {
      nombre: nombre,
      precio: precio
    };

    agregarAlCarrito(producto);
    completarFormulario();
  });
});

// Asignar el evento submit al formulario
const carritoForm = document.getElementById('carritoForm');
carritoForm.addEventListener('submit', realizarCompra);
