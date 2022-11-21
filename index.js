const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const btnNumbers = document.querySelectorAll('.number')
const btnOperators = document.querySelectorAll('.operator')

const display = new Resultado (result1, result2);

btnNumbers.forEach(boton => {
    boton.addEventListener('click', () => display.addNumber(boton.innerHTML));
});

btnOperators.forEach(boton => {
    boton.addEventListener('click', () => display.calcular(boton.value));
})