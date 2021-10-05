/* 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)                       //a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)                       //b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)                       // c.

console.log("d. ", typeof resultado)                //d. Boolean
*/


/* 2/3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")


const soma = Number (primeiroNumero) + Number (segundoNumero)
//antes o programa entenderia 2 strings(ao inves de somar uniria os dois numeros)
//depois converti as duas variaveis de string para number

console.log ( soma )
*/

//-------------------------------------------------------------------------------------------------------------------------------
/*
// a) Pergunte a idade do usuário
// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


const idadeUsuario = prompt ("Qual é a sua idade?")
const idadeAmigo = prompt ("Qual a idade do seu melhor amigo?")

console.log ("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario>idadeAmigo)
console.log (idadeUsuario-idadeAmigo)
*/

//-----------------------------------------------------------------------------------------------------------------------------
/*
// a) Peça ao usuário que insira um número **par**
// b) Imprima na console **o resto da divisão** desse número por 2.
// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código


const numeroPar = prompt ("insira um numero par:")

console.log (numeroPar%2) 
// todos os numeros pares tem resto = 0
//todos os numeros pares tem resto = 1
*/

 //--------------------------------------------------------------------------------------------------------------------------
/*
//Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console:
// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas


const idadeUsuario = prompt ("Qual é a sua idade?")

let resultado = idadeUsuario*12
console.log ("Sua idade em meses",resultado )

resultado = idadeUsuario*365
console.log ("Sua idade em dias",resultado )

resultado = idadeUsuario*365*24
console.log ("Sua idade em horas",resultado )
*/

//-------------------------------------------------------------------------------------------------------------------------------
// 4. Faça um programa que pergunte ao usuário dois números. Em seguida,
//faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
//     ```html
//     O primeiro numero é maior que segundo? true
//     O primeiro numero é igual ao segundo? false
//     O primeiro numero é divisível pelo segundo? true
//     O segundo numero é divisível pelo primeiro? true
    
//     obs: O true ou false vai depender dos números inseridos e do resultado das operações.

/*
const primeiroNumero = prompt("Digite o primeiro numero:")
const segundoNumero = prompt("Digite o segundo numero:")

let resultado = primeiroNumero>segundoNumero
console.log ("O primeiro numero é maior que o segundo?",resultado )

resultado = primeiroNumero===segundoNumero
console.log("O primeiro numero é igual ao segundo?", resultado)

resultado = primeiroNumero%segundoNumero === 0
console.log("O primeiro numero é divisivel pelo segundo?", resultado)

resultado = segundoNumero%primeiroNumero === 0
console.log("o segundo numero é divisivel pelo primeiro?", resultado) 
*/
//------------------------------------------------------------------------------------------------------------------------------

