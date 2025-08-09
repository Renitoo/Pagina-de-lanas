const carrito = {};

// Consolidated product data with consistent color naming and improved descriptions
const productosData = {
    "Lana Roja": { precio: 3500, img: "lanaroja.png", desc: "Lana acrílica de alta calidad en un vibrante tono rojo, ideal para proyectos de tejido que requieren suavidad y durabilidad.", categoria: "Lanas", colores: [{ name: "rojo", file: "lanaroja.png" }] },
    "Lana Celeste": { precio: 3800, img: "lanaceleste.png", desc: "Lana premium hipoalergénica en un suave tono celeste, perfecta para prendas delicadas de bebé y proyectos finos.", categoria: "Lanas", colores: [{ name: "celeste", file: "lanaceleste.png" }] },
    "Lana Morada": { precio: 4000, img: "lanamorada.png", desc: "Lana de color morado intenso, excelente para agregar un toque de creatividad y alegría a tus creaciones, con gran resistencia.", categoria: "Lanas", colores: [{ name: "morado", file: "lanamorada.png" }] },
    "Lana Multicolor": { precio: 4200, img: "lanamulticolor.png", desc: "Lana innovadora con degradados y patrones de color que se revelan al tejer, permitiendo crear piezas únicas y originales fácilmente. Peso: 100gr.", categoria: "Lanas", colores: [{ name: "multicolor", file: "lanamulticolor.png" }] },

    // Gorros - Specific entries for each color
    "Gorro Rojo": { precio: 5000, img: "gorrorojo.png", desc: "Gorro de lana suave y cálida en un rojo vibrante, ideal para el invierno.", categoria: "Gorros", colores: [{ name: "rojo", file: "gorrorojo.png" }] },
    "Gorro Multicolor": { precio: 5000, img: "gorromulticolor.png", desc: "Gorro alegre con diseño multicolor, perfecto para añadir un toque de color a tu estilo.", categoria: "Gorros", colores: [{ name: "multicolor", file: "gorromulticolor.png" }] },
    "Gorro Morado": { precio: 5000, img: "gorromorado.png", desc: "Gorro de lana en un profundo tono morado, confortable y a la moda.", categoria: "Gorros", colores: [{ name: "morado", file: "gorromorado.png" }] },
    "Gorro Celeste": { precio: 5000, img: "gorroceleste.png", desc: "Gorro ligero en tono celeste, ideal para un estilo casual y cómodo.", categoria: "Gorros", colores: [{ name: "celeste", file: "gorroceleste.png" }] },

    // Chalecos
    "Chaleco Morado": { precio: 8000, img: "chalecomorada.png", desc: "Chaleco de lana sin mangas en un hermoso tono morado.", categoria: "Chalecos", colores: [{ name: "morado", file: "chalecomorada.png" }] },
    "Chaleco Cafe": { precio: 8000, img: "chalecocafe.png", desc: "Chaleco de lana sin mangas en un cálido color café.", categoria: "Chalecos", colores: [{ name: "cafe", file: "chalecocafe.png" }] },
    "Chaleco Rojo": { precio: 8000, img: "chalecorojo.png", desc: "Chaleco de lana sin mangas en un vibrante color rojo.", categoria: "Chalecos", colores: [{ name: "rojo", file: "chalecorojo.png" }] },
    "Chaleco Celeste": { precio: 8000, img: "chalecoceleste.png", desc: "Chaleco de lana sin mangas en un suave color celeste.", categoria: "Chalecos", colores: [{ name: "celeste", file: "chalecoceleste.png" }] },
    // Cuellos
    "Cuello Cafe": { precio: 6500, img: "cuellocafe.png", desc: "Cuello de lana tejido en un cálido tono café, perfecto para el invierno.", categoria: "Cuellos", colores: [{ name: "cafe", file: "cuellocafe.png" }] },
    "Cuello Morado": { precio: 6500, img: "cuellomorado.png", desc: "Cuello de lana tejido en un elegante tono morado, suave y abrigador.", categoria: "Cuellos", colores: [{ name: "morado", file: "cuellomorado.png" }] },
    "Cuello Celeste": { precio: 6500, img: "cuelloceleste.png", desc: "Cuello de lana tejido en un relajante tono celeste, ideal para un toque de color.", categoria: "Cuellos", colores: [{ name: "celeste", file: "cuelloceleste.png" }] },
    "Cuello Azul": { precio: 6500, img: "cuelloazul.png", desc: "Cuello de lana tejido en un clásico tono azul, versátil y cómodo.", categoria: "Cuellos", colores: [{ name: "azul", file: "cuelloazul.png" }] },

    // Bufandas
    "Bufanda Roja": { precio: 6000, img: "bufandaroja.png", desc: "Bufanda larga y suave en un intenso color rojo, ideal para combinar con cualquier atuendo invernal.", categoria: "Bufandas", colores: [{ name: "rojo", file: "bufandaroja.png" }] },
    "Bufanda Gris": { precio: 6000, img: "bufandagris.png", desc: "Bufanda elegante en tono gris, versátil y perfecta para el uso diario o una ocasión especial.", categoria: "Bufandas", colores: [{ name: "gris", file: "bufandagris.png" }] },
    "Bufanda Celeste": { precio: 6000, img: "bufandaceleste.png", desc: "Bufanda de lana en un relajante Celeste, ofreciendo calidez y un toque de serenidad a tu vestimenta.", categoria: "Bufandas", colores: [{ name: "Celeste", file: "bufandaceleste.png" }] },
    "Bufanda Morada": { precio: 6000, img: "bufandamorada.png", desc: "Bufanda de lana en un cautivador tono morado, aportando elegancia y un toque distintivo a tu guardarropa de invierno.", categoria: "Bufandas", colores: [{ name: "morado", file: "bufandamorada.png" }] },
};


// Funciones existentes (sin cambios significativos en su lógica)
function mostrarDetalles(nombreProducto) {
    const producto = productosData[nombreProducto];
    if (producto) {
        document.getElementById('modalProductName').textContent = nombreProducto;
        document.getElementById('modalProductPrice').textContent = `$${producto.precio.toLocaleString('es-CL')}`;
        document.getElementById('modalProductImage').src = producto.img;
        document.getElementById('modalProductImage').alt = nombreProducto;
        document.getElementById('modalProductDescription').textContent = producto.desc;

        const colorOptionsContainer = document.getElementById('colorOptions');
        colorOptionsContainer.innerHTML = ''; // Clear previous options

        if (producto.colores && producto.colores.length > 0) {
            document.getElementById('colorSelectorContainer').style.display = 'block';
            producto.colores.forEach(color => {
                const colorBox = document.createElement('div');
                colorBox.className = `color-box color-${color.name}`;
                colorBox.dataset.colorName = color.name;
                colorBox.dataset.colorFile = color.file;
                colorBox.setAttribute('aria-label', `Color ${color.name}`);
                colorBox.addEventListener('click', () => {
                    // Remove 'selected' from all color boxes
                    document.querySelectorAll('.color-box').forEach(box => {
                        box.classList.remove('selected');
                    });
                    // Add 'selected' to the clicked color box
                    colorBox.classList.add('selected');
                    // Update main product image if a specific file is associated with the color
                    if (color.file) {
                        document.getElementById('modalProductImage').src = color.file;
                    }
                });
                colorOptionsContainer.appendChild(colorBox);
            });
            // Automatically select the first color option by default
            if (colorOptionsContainer.firstElementChild) {
                colorOptionsContainer.firstElementChild.classList.add('selected');
            }
        } else {
            document.getElementById('colorSelectorContainer').style.display = 'none';
        }

        const addToCartButton = document.getElementById('modalAddToCartButton');
        addToCartButton.onclick = () => agregarAlCarrito(nombreProducto);
        addToCartButton.dataset.productName = nombreProducto; // Store product name for adding to cart

        document.getElementById('productDetailsModal').style.display = 'flex';
        document.getElementById('contenidoPrincipal').classList.add('blurred');
    }
}

function cerrarDetalles() {
    document.getElementById('productDetailsModal').style.display = 'none';
    document.getElementById('contenidoPrincipal').classList.remove('blurred');
}

function agregarAlCarrito(nombreProducto) {
    const producto = productosData[nombreProducto];
    if (producto) {
        const selectedColorElement = document.querySelector('#colorOptions .color-box.selected');
        let itemKey = nombreProducto;
        let itemDisplayName = nombreProducto;

        if (selectedColorElement) {
            const colorName = selectedColorElement.dataset.colorName;
            itemKey = `${nombreProducto}-${colorName}`;
            itemDisplayName = `${nombreProducto} (${colorName.charAt(0).toUpperCase() + colorName.slice(1)})`;
        }

        if (carrito[itemKey]) {
            carrito[itemKey].cantidad++;
        } else {
            carrito[itemKey] = {
                nombre: itemDisplayName,
                precio: producto.precio,
                cantidad: 1
            };
        }
        actualizarCarrito();
        cerrarDetalles();
        abrirCarrito();
    }
}


function actualizarCarrito() {
    const carritoItemsDiv = document.getElementById('carrito-items');
    const totalCarritoSpan = document.getElementById('totalCarrito');
    let total = 0;
    carritoItemsDiv.innerHTML = ''; // Limpiar el carrito

    let hayItems = false;
    for (const key in carrito) {
        if (carrito.hasOwnProperty(key)) {
            hayItems = true;
            const item = carrito[key];
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-carrito';
            itemDiv.innerHTML = `
                <span>${item.nombre} x ${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
                <div class="acciones">
                    <button onclick="cambiarCantidad('${key}', 1)">+</button>
                    <button onclick="cambiarCantidad('${key}', -1)">-</button>
                    <button class="eliminar" onclick="eliminarDelCarrito('${key}')">Eliminar</button>
                </div>
            `;
            carritoItemsDiv.appendChild(itemDiv);
            total += item.precio * item.cantidad;
        }
    }

    if (!hayItems) {
        carritoItemsDiv.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
    }

    totalCarritoSpan.textContent = `Total: $${total.toLocaleString('es-CL')}`;
}

function cambiarCantidad(key, cambio) {
    if (carrito[key]) {
        carrito[key].cantidad += cambio;
        if (carrito[key].cantidad <= 0) {
            delete carrito[key];
        }
        actualizarCarrito();
    }
}

function eliminarDelCarrito(key) {
    delete carrito[key];
    actualizarCarrito();
}

function abrirCarrito() {
    document.getElementById('carritoSidebar').classList.add('abierto');
    document.getElementById('contenidoPrincipal').classList.add('blurred');
}

function cerrarCarrito() {
    document.getElementById('carritoSidebar').classList.remove('abierto');
    document.getElementById('contenidoPrincipal').classList.remove('blurred');
}

function enviarPorWhatsApp() {
    let mensaje = "¡Hola! Me gustaría hacer un pedido de los siguientes productos:\n\n";
    let total = 0;
    for (const key in carrito) {
        if (carrito.hasOwnProperty(key)) {
            const item = carrito[key];
            mensaje += `- ${item.nombre} (Cantidad: ${item.cantidad}) - $${(item.precio * item.cantidad).toLocaleString('es-CL')}\n`;
            total += item.precio * item.cantidad;
        }
    }
    mensaje += `\nTotal: $${total.toLocaleString('es-CL')}\n\n`;
    mensaje += "¡Espero tu confirmación!";

    const numeroWhatsApp = "+56988612195"; // Reemplaza con tu número de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}


// Funciones para el mensaje personalizado (con cambios)
function mostrarMensajePersonalizadoModal() {
    document.getElementById('mensajePersonalizadoContainer').style.display = 'block';
    document.getElementById('overlayPersonalizado').style.display = 'block';
    document.getElementById('contenidoPrincipal').classList.add('blurred'); // Apply blur
}

function cerrarMensajePersonalizadoModal() {
    document.getElementById('mensajePersonalizadoContainer').style.display = 'none';
    document.getElementById('overlayPersonalizado').style.display = 'none';
    document.getElementById('contenidoPrincipal').classList.remove('blurred'); // Remove blur
}

function enviarMensajePersonalizado() {
    const mensaje = document.getElementById('mensajePersonalizado').value;
    if (mensaje.trim() === "") {
        alert("Por favor, escribe un mensaje antes de enviar.");
        return;
    }
    const numeroWhatsApp = "+56988612195"; // Reemplaza con tu número de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
    cerrarMensajePersonalizadoModal();
    document.getElementById('mensajePersonalizado').value = ''; // Limpiar el textarea
}

// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic en un enlace (para dispositivos móviles)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Event listeners para los botones flotantes
    document.getElementById('btnToggleCarrito').addEventListener('click', abrirCarrito);
    document.getElementById('btnToggleFiltro').addEventListener('click', () => {
        document.getElementById('filtroSidebar').classList.add('abierto');
        document.getElementById('contenidoPrincipal').classList.add('blurred');
    });
    document.getElementById('btnCerrarFiltro').addEventListener('click', () => {
        document.getElementById('filtroSidebar').classList.remove('abierto');
        document.getElementById('contenidoPrincipal').classList.remove('blurred');
    });

    // Event listener para el nuevo botón flotante de mensaje personalizado
    document.getElementById('btnTogglePersonalizado').addEventListener('click', mostrarMensajePersonalizadoModal);

    // Event listener para el overlay del mensaje personalizado (para cerrarlo al hacer clic fuera)
    document.getElementById('overlayPersonalizado').addEventListener('click', cerrarMensajePersonalizadoModal);


    // Funcionalidad de búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        aplicarFiltros(); // Re-aplicar filtros con el término de búsqueda
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            aplicarFiltros();
        }
    });

    // Funciones de filtro

    const categoriasUnicas = new Set();
    const coloresUnicos = new Set();

    for (const key in productosData) {
        if (productosData.hasOwnProperty(key)) {
            categoriasUnicas.add(productosData[key].categoria);
            if (productosData[key].colores) {
                productosData[key].colores.forEach(color => {
                    coloresUnicos.add(color.name);
                });
            }
        }
    }

    function generarFiltros() {
        const filtroItemsDiv = document.getElementById('filtro-items');
        filtroItemsDiv.innerHTML = ''; // Limpiar filtros existentes

        // Generar filtros por categoría
        const categoriaFiltroDiv = document.createElement('div');
        categoriaFiltroDiv.className = 'filtro-categoria';
        categoriaFiltroDiv.innerHTML = '<h3>Categorías</h3>';
        categoriasUnicas.forEach(categoria => {
            const label = document.createElement('label');
            label.className = 'filtro-opcion';
            label.innerHTML = `
                <input type="checkbox" name="categoria" value="${categoria}">
                ${categoria}
            `;
            categoriaFiltroDiv.appendChild(label);
        });
        filtroItemsDiv.appendChild(categoriaFiltroDiv);

        // Generar filtros por color
        const colorFiltroDiv = document.createElement('div');
        colorFiltroDiv.className = 'filtro-colores';
        colorFiltroDiv.innerHTML = '<h3>Colores</h3><div class="color-options-filter"></div>';
        const colorOptionsFilterDiv = colorFiltroDiv.querySelector('.color-options-filter');

        coloresUnicos.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.className = `color-box-filter color-${color}`;
            colorBox.dataset.colorName = color;
            colorBox.setAttribute('aria-label', `Filtrar por color ${color}`);
            colorBox.addEventListener('click', () => {
                colorBox.classList.toggle('selected');
            });
            colorOptionsFilterDiv.appendChild(colorBox);
        });
        filtroItemsDiv.appendChild(colorFiltroDiv);
    }

    // Event listeners para los botones de Aplicar y Borrar Filtros
    document.getElementById('btnAplicarFiltros').addEventListener('click', aplicarFiltros);
    document.getElementById('btnBorrarFiltros').addEventListener('click', borrarFiltros);

    function borrarFiltros() {
        // Desmarcar todas las categorías
        document.querySelectorAll('.filtro-categoria input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Deseleccionar todos los colores
        document.querySelectorAll('.color-box-filter').forEach(colorBox => {
            colorBox.classList.remove('selected');
        });

        // Limpiar el campo de búsqueda
        document.getElementById('searchInput').value = '';

        // Aplicar los filtros para mostrar todos los productos
        aplicarFiltros();
    }


    function aplicarFiltros() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const selectedCategories = Array.from(document.querySelectorAll('.filtro-categoria input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);
        const selectedColors = Array.from(document.querySelectorAll('.color-box-filter.selected'))
            .map(colorBox => colorBox.dataset.colorName);

        document.querySelectorAll('.productos-grid .producto').forEach(productElement => {
            const productName = productElement.dataset.nombre.toLowerCase();
            const productData = productosData[productElement.dataset.nombre]; // Get product data directly
            const productCategory = productData ? productData.categoria : ''; // Safely get category
            const productColors = productData && productData.colores ?
                                  productData.colores.map(c => c.name) : [];

            // 1. Search term match
            const matchesSearch = productName.includes(searchTerm);

            // 2. Selected categories match
            const isCategorySelected = selectedCategories.length === 0 || selectedCategories.includes(productCategory);

            // 3. Selected colors match
            const isColorSelected = selectedColors.length === 0 || productColors.some(color => selectedColors.includes(color));

            // A product is displayed if it matches all active criteria
            if (matchesSearch && isCategorySelected && isColorSelected) {
                productElement.style.display = 'block';
            } else {
                productElement.style.display = 'none';
            }
        });

        // Show/hide sections based on whether they contain visible products
        const sections = document.querySelectorAll('.seccion');
        sections.forEach(section => {
            const productsInSection = section.querySelectorAll('.producto');
            let allHiddenInSection = true;
            productsInSection.forEach(p => {
                // Check if the product's display is not 'none' and not an empty string (which means it's visible by default)
                if (p.style.display !== 'none' && p.style.display !== '') {
                    allHiddenInSection = false;
                }
            });

            if (allHiddenInSection) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        });
    }

    // Initialize filters and cart when DOM is loaded
    generarFiltros();
    aplicarFiltros(); // Apply initial filters (nothing selected, show all)
    actualizarCarrito(); // Ensure cart is initialized
});