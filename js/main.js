/* Definir array de imagenes para el header */
const banners = [
    { src: 'assets/fotos-banners/banner-1.jpg', alt: 'Alt 1', title: 'Title 1' },
    { src: 'assets/fotos-banners/banner-2.jpg', alt: 'Alt 2', title: 'Title 2' },
    { src: 'assets/fotos-banners/banner-3.jpg', alt: 'Alt 3', title: 'Title 3' },
    { src: 'assets/fotos-banners/banner-4.jpg', alt: 'Alt 4', title: 'Title 4' },
    { src: 'assets/fotos-banners/banner-5.jpg', alt: 'Alt 5', title: 'Title 5' },
    { src: 'assets/fotos-banners/banner-6.jpg', alt: 'Alt 6', title: 'Title 6' },
    { src: 'assets/fotos-banners/banner-7.jpg', alt: 'Alt 7', title: 'Title 7' },
    { src: 'assets/fotos-banners/banner-8.jpg', alt: 'Alt 8', title: 'Title 8' }
];
  
/* Funcion para generar la imagen del banner aleatoriamente */
const generarRandomBanner = () => {

    // Guardamos el elemento img del banner
    const imgBanner = document.getElementById("imagen-banner");

    // Generamos un numero aleatorio entre 0 y la longitud del array banners
    // Math.floor devuelve el numnero redondeado
    const randomIndex = Math.floor((Math.random() * banners.length) + 0); 

    // Obtener el banner aleatorio
    const randomBanner = banners[randomIndex];

    // Asignar los atributos al img del header
    imgBanner.src = randomBanner.src;
    imgBanner.alt = randomBanner.alt;
    imgBanner.title = randomBanner.title;

};

// Llamada a la funcion
generarRandomBanner();


/* Definir array de imagenes para la galeria */
const viajes = [
    { src: 'assets/fotos-viajes/viaje-1.jpg', alt: 'Alt 1', title: 'Title 1', descripcion: 'Descripción de la imagen 1' },
    { src: 'assets/fotos-viajes/viaje-2.jpg', alt: 'Alt 2', title: 'Title 2', descripcion: 'Descripción de la imagen 2' },
    { src: 'assets/fotos-viajes/viaje-3.jpg', alt: 'Alt 3', title: 'Title 3', descripcion: 'Descripción de la imagen 3' },
    { src: 'assets/fotos-viajes/viaje-4.jpg', alt: 'Alt 4', title: 'Title 4', descripcion: 'Descripción de la imagen 4' },
    { src: 'assets/fotos-viajes/viaje-5.jpg', alt: 'Alt 5', title: 'Title 5', descripcion: 'Descripción de la imagen 5' },
    { src: 'assets/fotos-viajes/viaje-6.jpg', alt: 'Alt 6', title: 'Title 6', descripcion: 'Descripción de la imagen 6' },
    { src: 'assets/fotos-viajes/viaje-7.jpg', alt: 'Alt 7', title: 'Title 7', descripcion: 'Descripción de la imagen 7' },
];

/* Funcion para generar la geleria de imagenes */
const generarGaleria = () => {

    // Obtenemos el contenedor de la galeria
    // [0] porque ClassName devuelve un HTMLCollection
    const contenedorCard = document.getElementsByClassName("galeria-container")[0];

    // Creamos un fragmento
    const fragmento = document.createDocumentFragment();

    // Recorremos el array de viajes
    viajes.forEach((viaje) => {

        // Crear div con la clase card
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        // Crear la imagen
        const img = document.createElement('img');
        img.src = viaje.src;
        img.alt = viaje.alt;
        img.title = viaje.title;

        // Creamos la descripcion para las fotos
        const p = document.createElement('p');
        p.textContent = viaje.descripcion;

        // Añadir el img y p al contenedor
        cardDiv.appendChild(img);
        cardDiv.appendChild(p);

        // Añadir el div al fragmento de documento
        fragmento.appendChild(cardDiv);

    });

    // Añadir el fragmento al contenedor principal
    contenedorCard.appendChild(fragmento);
}

generarGaleria();

