function generateNumber(){

    const numero1 = Math.ceil(document.querySelector('.number1').value)
    const numero2 = Math.floor(document.querySelector('.number2').value)

    const result = Math.floor(Math.random() * (numero1 - numero2 + 1)) + numero2;

    document.getElementById('resultado').innerHTML = result;
}
