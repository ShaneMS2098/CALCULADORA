class Resultado {
    constructor(result1, result2) {
        this.result1 = result1;
        this.result2 = result2;
        this.calc = new Calculator();
        this.valueActual = '';
        this.previousValue = '';
        this.typeOperation = undefined;
        this.signos = {
            addition: '+',
            division: '/',
            multiplication: '*',
            subtraction: '-',
            percent: '%'
        }
    }
    borrar () {
        this.valueActual = this.valueActual.toString().slice(0, -1);
        this.printResult();
    }
    allClear () {
        this.valueActual = '';
        this.previousValue = '';
        this.typeOperation = undefined;
        this.printResult ();
    }
    addNumber(numero) {
        if (numero ===',' && this.valueActual.includes(',')) return;
        this.valueActual = this.valueActual.toString() + numero.toString ();
        this.printResult();
    }
    printResult () {
        this.result2.textContent = this.valueActual;
        this.result1.textContent = `${this.previousValue} ${this.signos[this.typeOperation] || ''}`;
    }
    calculos () {
        const previousValue =parseFloat(this.previousValue);
        const valueActual = parseFloat(this.valueActual);
        if (isNaN(valueActual) || isNaN(previousValue)) return;
        this.valueActual = this.calc[this.typeOperation] (previousValue, valueActual);
    }
    calcular (tipo) {
        this.typeOperation !== 'igual' && this.calculos();
        this.typeOperation = tipo;
        this.previousValue = this.valueActual || this.previousValue;
        this.valueActual = '';
        this.printResult();
    }
}