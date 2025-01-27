const uploadInput = document.querySelector('#upload');
const previewImage = document.querySelector('#profilowe');

uploadInput.addEventListener('change', () => {
    const file = uploadInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            previewImage.src = reader.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

const hologram = document.querySelector('.hologram-effect');

window.addEventListener('deviceorientation', (event) => {
const x = event.beta; // Kąt nachylenia urządzenia
const y = event.gamma;

hologram.style.transform = `skewX(${y}deg)`;
});
