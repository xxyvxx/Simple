const searchIcon = document.getElementById('search-icon');
const inputContainer = document.getElementById('input-container');
const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');

let isInputVisible = false;

// Показать/скрыть поле ввода при нажатии на иконку лупы
searchIcon.addEventListener('click', function () {
    if (isInputVisible) {
        inputContainer.style.display = 'none'; // Скрываем контейнер с полем ввода
        isInputVisible = false; // Обновляем флаг
        searchInput.value = ''; // Очищаем поле ввода при закрытии
    } else {
        inputContainer.style.display = 'flex'; // Показываем контейнер с полем ввода
        searchInput.focus(); // Устанавливаем фокус на поле ввода
        isInputVisible = true; // Обновляем флаг
    }
});
// Сброс содержимого поля ввода при нажатии на крестик
clearButton.addEventListener('click', function () {
    searchInput.value = ''; // Очищаем поле ввода
});






const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');
const navLinks = document.querySelectorAll('.overlay__nav-link');
const burgerButton = document.getElementById('header__burger');

// Функция для открытия оверлея
function openOverlay() {
    overlay.style.display = 'block'; // Показываем оверлей
}

// Функция для закрытия оверлея
function closeOverlay() {
    overlay.style.display = 'none'; // Скрываем оверлей
}

// Открыть оверлей при выборе бургер кнопки
burgerButton.addEventListener('click', function() {
    openOverlay();
});

// Закрыть оверлей при нажатии на крестик
closeButton.addEventListener('click', closeOverlay);

// Закрыть оверлей при нажатии на ссылки
navLinks.forEach(link => {
    link.addEventListener('click', closeOverlay);
});

// Закрыть оверлей при изменении размера окна
window.addEventListener('resize', function() {
    if (window.innerWidth > 500) {
        closeOverlay();
    }
});