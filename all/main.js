function calculate_step() {
    const base = document.getElementById('base').value;
    const exponent = document.getElementById('exponent').value;
    if (base === '' || exponent === '') {
        if (base === '' && exponent === '') {
            alert('Оба поля заполнены не корректно');
        } else if (base === '') {
            alert('Первое поле заполненно не корректно');
        } else if (exponent === '') {
            alert('Второе поле заполненно не корректно');
        }
        return;
    }

    const baseNum = parseFloat(base);
    const exponentNum = parseFloat(exponent);

    const result = baseNum ** exponentNum;
    document.getElementById('result').innerText = `Ответ: ${result}`;
    console.log("Ответ - ", result);
    console.log("Вывод в консоль создан для проверки функционала и работоспособности веб-приложения.");
}

const themeToggleButton = document.getElementById('themeToggle');
let isDarkTheme = false;

themeToggleButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        // Темная тема
        document.body.style.backgroundColor = '#121212'; // Темный фон
        document.body.style.color = '#ffffff';  // Белый текст
        document.querySelector('.container').style.backgroundColor = '#1e1e1e'; // Фон контейнера
        document.querySelectorAll('h1, h2, .result').forEach(element => {
            element.style.color = '#ffffff'; // Белый текст для заголовков и результатов
        });
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.style.backgroundColor = '#2a2a2a'; // Темный фон для вводов
            input.style.color = '#ffffff'; // Белый текст для вводов
            input.style.borderColor = '#ffffff'; // Цвет границы
        });
        themeToggleButton.textContent = '☀️'; // Символ солнца для переключения на светлую тему
    } else {
        // Светлая тема
        document.body.style.backgroundColor = '#f5f5f5'; // Светлый фон
        document.body.style.color = '#333333'; // Черный текст
        document.querySelector('.container').style.backgroundColor = '#ffffff'; // Фон контейнера
        document.querySelectorAll('h1, h2, .result').forEach(element => {
            element.style.color = '#333333'; // Черный текст для заголовков и результатов
        });
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.style.backgroundColor = '#ffffff'; // Светлый фон для вводов
            input.style.color = '#333333'; // Черный текст для вводов
            input.style.borderColor = '#ccc'; // Цвет границы
        });
        themeToggleButton.textContent = '🌙'; // Символ луны для переключения на темную тему
    }
});

