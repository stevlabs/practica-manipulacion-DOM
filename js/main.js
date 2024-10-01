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
  
/* Funcion para generar la imagen del banner aleatoriamente*/
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