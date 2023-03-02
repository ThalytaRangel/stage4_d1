alert(`Olá usuário, nós vamos realizar operações matemáticas.`)

const number1 = Number(prompt(`Por favor digite o primeiro número`)) 

const number2 = Number(prompt('Agora digite o segundo número'))




let sum = number1 + number2
let sub = number1 - number2
let div = number1 / number2
let multi = number1 * number2
let restDiv = number1 % number2



alert("O resultado da soma foi: " + sum)
alert("O resultado da subtração foi: " + sub)
alert("O resultado da multiplicação foi: " + multi)
alert("O resultado da divisão foi: " + div)
alert("O resto da divisão foi: " + restDiv)

if(sum % 2 == 0) {
  alert("A soma dos números digitados é par: " + sum)
}
else {
  alert("A soma dos números digitados é impar: " + sum)
}

if (number1 != number2) {
  alert("Os números digitados são diferentes")
}
else {
  alert("Os números digitados são iguais")
}
