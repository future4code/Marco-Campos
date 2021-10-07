//EXERCICIOS DE ENTERPRETAÇAO:

//-----------------------------------------------------------------------------------------------------------------------------------
// 1. Leia o código abaixo

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//     a) O que vai ser impresso no console?

//  b) O que aconteceria se retirasse os dois `console.log` e
//     simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
//     O que apareceria no console?

//A-PRIMEIRO CONSOLE.LOG, 10, E NO SEGUNDO, 50.
//B- O PROGRAMA RODARIA NORMALMENTE, MAS NAO APARECERIA NENHUMA INFORMAÇAO NO CONSOLE.

//-----------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------
// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto")

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//     a. Explique o que essa função faz e qual é sua utilidade

//     b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`
//          ii.  `CENOURA é bom pra vista`
//          iii. `Cenouras crescem na terra`

//A- A FUNCAO PEGA UMA FRASE, COLOCA ELA EM LETRA MINUSCULA E DEPOIS PROCURA NO TEXTO A PALAVRA "CENOURA"
//B- SAIDAS SAO TODAS  BOOLEANS "TRUE"

//-----------------------------------------------------------------------------------------------------------------------------------

                                     //EXERCICIO DE ESCRITA DE CODIGO:

//-----------------------------------------------------------------------------------------------------------------------------------
// 1. Escreva as funções explicadas abaixo:
//-----------------------------------------------------------------------------------------------------------------------------------

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//     "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.

/*
function imprimirMensagem() {
  console.log("Eu sou Raphael, tenho 22 anos, moro no Rio de Janeiro e sou estudante.")
}
imprimirMensagem()
*/
//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
//  o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
//  Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

//- Exemplo
    
//Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
    
//     `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
    
// - 💡  Dica
// Na hora de criar a frase, você pode utilizar as template strings que vimos na aula anterior!
// As variáveis da frase, nesse caso, serão os próprios parâmetros recebidos na função

/*
function imprimirMensagemB (nome, idade, endereco, proficao){

    console.log("Eu sou", nome,"tenho", idade, "anos", "moro em", endereco, "e sou",proficao)
}

imprimirMensagemB("Raphael", 22, "Rio de janeiro", "estudante")
*/

//-----------------------------------------------------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------------------------------------------------------
// 2. Escreva as funções explicadas abaixo:
//-----------------------------------------------------------------------------------------------------------------------------------

//     a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
//        Invoque a função e imprima no console o resultado.

/*
function somar(numeroA, numeroB){

    const soma = Number(numeroA) + Number(numeroB)
    return soma
}

const resultado = somar(10, 10)
console.log(resultado)
*/

//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------

//     b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
/*
function Comparar(numeroA, numeroB){
    const comparativo = Number(numeroA) >= Number(numeroB)
 return comparativo

}

const resultado = Comparar(10, 50)
console.log(resultado)
*/

//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------

//     c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
/*
function numeroPar (numero){

   const divisaoPorDois = numero % 2
   const resultadoDaDivisao = divisaoPorDois ===0 
   console.log(resultadoDaDivisao)
   return resultadoDaDivisao
}

numeroPar(100)
*/

//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------

//     d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
//        juntamente com uma versão dela em letras maiúsculas.

/*
function palavra(texto) {
const resposta = texto.toUpperCase()
console.log(resposta, resposta.length)

}
palavra("ola")
*/

//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida,
//peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento.
//    Por fim, mostre no console o resultado das operações:

//     Números inseridos: 30 e 3
//     Soma: 33
//     Diferença: 27
//     Multiplicação: 90
//     Divisão: 10
    
//     - 💡  Dica
        
//         Lembre-se de converter a entrada do usuário para número antes de fazer os cálculos :)

/*
const numInserido = [30, 3]

function somar(numUm,numDois){
    const soma =Number(numUm) + Number(numDois)
    console.log(soma)
}
somar(numInserido[0],numInserido[1])

function subtrair(numUm,numDois){
    const subtracao =Number(numUm) - Number(numDois)
    console.log(subtracao)
}
subtrair(numInserido[0],numInserido[1])

function multiplicar(numUm,numDois){
    const multiplicacao =Number(numUm) * Number(numDois)
    console.log(multiplicacao)
}
multiplicar(numInserido[0],numInserido[1])

function dividir(numUm,numDois){
    const divisao =Number(numUm) / Number(numDois)
    console.log(divisao)
}
dividir(numInserido[0],numInserido[1])
*/

//-----------------------------------------------------------------------------------------------------------------------------------

                                     //DESAFIOS:

//-----------------------------------------------------------------------------------------------------------------------------------

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código
//    através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

//     a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
//     b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.**
//        Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

     
/*
const funcaoUm = (parametroUm) =>{
        
      const resultadoUm = parametroUm
      console.log(resultadoUm)
      return resultadoUm
}

     const funcaoDois = (parametroDois, parametroTres) =>{

        const resultadoDois = parametroDois + parametroTres
        console.log(resultadoDois)
        

 }    
 funcaoUm(funcaoDois(10, 10))
 */


//-----------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------
// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
//     Retorne este valor, invoque a função e imprima o resultado no console.  

//- 💡  Dica:       
//         A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e A e B são os catetos. 
//         É necessário isolar a hipotenusa, então ao final temos: **hip = √(a² + b²)**

/*
function TeoremaDePitagoras(catetoA, catetoB ){

    const formula = Number(catetoA*catetoA) + Number(catetoB*catetoB)
    const raizQuadrada = formula**(1/2)
    console.log(raizQuadrada)

}
TeoremaDePitagoras(3, 4)
*/