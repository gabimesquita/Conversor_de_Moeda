var valorDolarTexto = prompt ("Qual o valor em Dólar que você gostaria de converter?")

var valorDolarNumero = parseFloat(valorDolarTexto)

var valorReal = valorDolarNumero * 5.50
var valorRealFixado = valorReal.toFixed(2)

alert (valorRealFixado)