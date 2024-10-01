// Rutas locales de las imágenes (usar "/" en lugar de "\")
const images = [
    "img/foto1.JPEG",
    "img/foto2.JPEG",
    "img/foto3.JPEG",
    "img/foto4.JPEG",
    "img/foto5.JPEG",
    "img/foto6.JPEG",
    "img/foto7.JPEG",
    "img/foto8.JPEG"
];

let currentIndex = 0;

function changeImage() {
    const imageElement = document.getElementById('currentImage');
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

// Cambiar imagen cada 3 segundos
setInterval(changeImage, 3000);
