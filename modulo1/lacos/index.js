//--------------------------------------------------------------------------------------------------------------------------------------

 //EXERCICIOS DE INTERPRETACAO DE CODIGO

//--------------------------------------------------------------------------------------------------------------------------------------

 //1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    // let valor = 0
    //  for(let i = 0; i < 5; i++) {
    //   valor += i
    // }
    // console.log(valor)

    // O codigo esta contando ate 5 guardando em uma variavel e somando ao numero de vezes que foi chamado
    //é impresso 10

//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------

    //  2. Leia o código abaixo:
    
 
    //  const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    //  for (let numero of lista) {
    //   if (numero > 18) {
    // 		console.log(numero)
    // 	}
    //  }
   
    
    // a) O que vai ser impresso no console? // numeros que forem maior que 18
    
    // b) Se eu quisesse acessar o **índice**
    //  de cada elemento dessa lista, o `for...of...` é suficiente? //sim
    //   Se sim, o que poderia ser usado para fazer isso?               //for (let numero of array){
                                                                        //    console.log(numero)
                                                                        //}

//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------

    // 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    

    //  const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    //  let quantidadeAtual = 0
    //  while(quantidadeAtual < quantidadeTotal){
    //   let linha = ""
    //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    //     linha += "*"
    //   }
    //   console.log(linha)
    //   quantidadeAtual++
    //  }


                // ele vai colocar asteriscos nas proximas 4 linhas(1 na primeira, 2 na segunda, 3 na terceira e 4 na quarta)


//--------------------------------------------------------------------------------------------------------------------------------------

 //EXERCICIOS DE ESCRITA DE CODIGO

//--------------------------------------------------------------------------------------------------------------------------------------

    //  1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    //  a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"


            // const quantidadeAnimais = Number( prompt("quantos animais de estimaçao voce tem?"))

            //     if (quantidadeAnimais === 0){
            //         console.log("Que pena! Você pode adotar um pet!")
            //     } 


    //  b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
    //     um por um, e guarde esses nomes em um array

               
            //    let animais = [] 
            //    while(animais.length<quantidadeAnimais) {
            //    animais.push(prompt("digite o nome do seu bichinho(um por um)"))
            //    }
               
    
    //  c) Por fim, imprima o array com os nomes dos bichinhos no console
    
                // console.log(animais)


//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------

    //  2. Considere que você tenha acesso a um `array`  
    //     (chamado de 'array original') que é composto somente de números.
    //     Baseando-se nisso, crie uma função para cada um dos itens abaixo,
    //     realizando as operações pedidas:

            let numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
    //  a) Escreva um programa que **imprime**
    //     cada um dos valores do array original.

            function imprimirArr (array){
                for (let numero of array){
                    console.log(numero)
                }
            }
            
    //  b) Escreva um programa que **imprime**
    //     cada um dos valores do array original divididos por 10

            function dividirArr (array){
                for ( let numero of array){
                    console.log(numero/10)
                }
            }

    //  c) Escreva um programa que **crie** 
    //     um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

            function criarArrPar(array){
                let arrPar = [ ]
                for ( let numero of array){
                    if(numero % 2 === 0 ){
                        arrPar.push(numero)
                    }
                }
                console.log(arrPar)
            }
    
    //  d) Escreva um programa que **crie**
    //     um novo array contendo strings, da seguinte forma:
    //     "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

            function criarArrString (array){
                let arrString = [ ]
                for (let i = 0; i < array.length; i++){
                    arrString.push(
                        `O elemento do indice ${[i]} é ${array[i]}`
                    )  
                }
               console.log (arrString)
            }
           
    
    //  e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    
            function imprimirMaiorArr(array){
                let maior = array[0]
                for ( let i = 1; i < array.length; i++)
                    if ( array[i] > maior ){
                        maior = array[i]
                    }
                    return maior
            }
            function imprimirmenorArr(array){
                let menor = array[0]
                for ( let i = 1; i < array.length; i++)
                    if ( array[i] < menor ){
                        menor = array[i]
                    }
                    return menor
            }

            // console.log(`
            // maior numero : ${imprimirMaiorArr(numeros)}
            // menor numero : ${imprimirmenorArr(numeros)}
            // `)
//--------------------------------------------------------------------------------------------------------------------------------------

 //DESAFIOS

//--------------------------------------------------------------------------------------------------------------------------------------

        // 1. Neste exercício vocês vão implementar uma brincadeira muito simples:
        // "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas.
    
        // Inicialmente, uma das pessoas insere qual o número em que ela pensou.
        // A outra pessoa tem que ficar chutando até acertar em cheio o número.
        // Esta é uma tarefa difícil,
        // então quem escolheu o número fica dando umas dicas para a outra pessoa,
        // indicando se o número que ela pensou é
        // maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:        

        // Vamos jogar!
        // O número chutado foi: 3
        // Errrrrrrrou, é maior
        // O número chutado foi: 18
        // Errrrrrrrou, é menor
        // O número chutado foi: 15
        // Errrrrrrrou, é menor
        // O número chutado foi: 11
        // Acertou!!
        // O número de tentativas foi: 4 



        // Um resumo das funcionalidades são:
        
        // a) Solicitar que o primeiro jogador escolha um número, através do `prompt`.
        //    Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
        
        // b) A partir daí, será solicitado, ao segundo jogador,
        //    que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
        
        // - O número chutado, com a mensagem: `O número chutado foi: <número>`
        // - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado:
        //   `Errou. O número escolhido é maior/menor`
        
        // c) Quando o segundo jogador acertar o número escolhido pelo primeiro jogador,
        //    deve ser impressa a mensagem: `Acertou` ; e, embaixo,
        //    `O número de tentativas foi : <quantos chutes o usuário deu>`
        
        // - Observação 👀
            
        //     Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício,
        //     mas lembrem-se de cobrir todos os casos pedidos!

//--------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------------


    //  2. Uma das principais características de uma boa pessoa programadora
    // é conseguir resolver seus problemas independentemente.
    // Queremos que você comece a treinar isso a partir de hoje! Então,
    // vamos pedir para que você faça uma alteração no código acima.
    // Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador.
    // A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100)
    // e o usuário terá que ficar chutando o valor até acertar.
    //  Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.
    
    //  Quando resolver o exercício, pare e faça a seguinte reflexão: foi fácil fazer esta alteração?
    // O que você poderia ter feito para que fosse mais fácil?
    //  **Deixe comentários no seu código sobre esta reflexão.**
    
    //  - 💡  Dica
        
    //     Aqui temos algumas referências que explicam como sortear um número aleatório em Javascript
        
    //     `EN`
        
    //     [JavaScript random() Method](https://www.w3schools.com/jsref/jsref_random.asp)
        
    //     `PT`
        
    //     [Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 