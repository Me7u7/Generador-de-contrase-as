const inputRange = document.querySelector('#range');
const lengthCounter = document.querySelector('#lengthCounter');
const generateBtn = document.querySelector('#generate');
const passwordHeading = document.querySelector('#password');

const handleChange = () => {
    lengthCounter.textContent = inputRange.value;
    PrintPassword(); // Regenera la contraseña automáticamente
};

const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSymbols) characters += '!@#$%&*';

    if (characters === '') {
        passwordHeading.textContent = 'Selecciona al menos una opción';
        return '';
    }

    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

const PrintPassword = () => {
    const password = generatePassword(inputRange.value);
    if (password) {
        passwordHeading.textContent = password;
    }
};

inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);
