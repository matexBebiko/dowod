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

// Pobieranie elementów
const godloContainer = document.querySelector('#godlo-container');

// Dodanie listenera, który pozwala na testowanie kliknięć (jeśli wymagane)
if (godloContainer) {
    godloContainer.addEventListener('click', () => {
        alert('Godło zostało kliknięte!');
    });
}

// Aktualizacja czasu wyświetlanego na stronie
const czasOkazania = document.querySelector('#czas-okazania p#data');
if (czasOkazania) {
    const aktualnaData = new Date();
    const formatowanaData = aktualnaData.toLocaleString('pl-PL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    czasOkazania.textContent = formatowanaData;
}

// Funkcja dla efektów dynamicznych (jeśli potrzebne)
function dynamicEffects() {
    console.log('Efekty dynamiczne załadowane!');
    // Możesz tutaj dodać dodatkowe efekty lub logikę
}

// Inicjalizacja efektów po załadowaniu strony
window.addEventListener('DOMContentLoaded', dynamicEffects);
