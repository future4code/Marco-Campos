                                        //EXERCICOS DE ENTERPRETAÇAO

//1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
   /*
    let array
    console.log('a. ', array)                        // a. undefined
    
    array = null                                     
    console.log('b. ', array)                        //b. null
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]    
    console.log('c. ', array.length)                 //c. 11
    
    let i = 0
    console.log('d. ', array[i])                     //d. 3
    
    array[i+1] = 19
    console.log('e. ', array)                        //e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    
    const valor = array[i+6]
    console.log('f. ', valor)                      //f. 11
    */
//--------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------
//2. Leia o código abaixo com atenção 
    /*
    const frase = prompt("Digite uma frase")
    
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 
    */
//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//SUBI NUM ÔNIBUS EM MIRROCOS  27(Quantidade de itens)
//--------------------------------------------------------------------------------------------------------------------------------
 

                                              //EXERCICIOS DE ESCRITA DE CODIGO:
//--------------------------------------------------------------------------------------------------------------------------------

//1-Faça um programa que pergunte ao usuário seu nome e seu e-mail.
//2-Imprima no console a mensagem:O e-mail  `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

/*
const nomeDoUsuario = prompt("Por favor,Digite seu nome")
const emailDoUsuario = prompt("Agora, digite seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario} `)
*/

//--------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//     a) Imprima no console o array completo
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

/*
const ComidasPreferidas = ["Arroz", "Batata", "Carne", "Feijao", "Salada"]
console.log ("essas sao minhas Comidas Preferidas:")
console.log(ComidasPreferidas[0])
console.log(ComidasPreferidas[1])
console.log(ComidasPreferidas[2])
console.log(ComidasPreferidas[3])
console.log(ComidasPreferidas[4])
const comidaUsuario = prompt ("qual sua comida preferida")
ComidasPreferidas[1]= comidaUsuario
console.log(ComidasPreferidas)
*/

//--------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
//     c) Imprima o array no console
    
//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//     e) Remova da lista o item de índice que o usuário escolheu.
    
//     f) Imprima o array no console
    
//     - 💡  Dica
        
//         Para remover um item de um array, você pode utilizar a função splice!
//         Caso não se lembre como ela funciona, não tem nenhum problema: uma breve pesquisa no google te trará vários exemplos.

/*
const listaDeTarefas =[]

const tarefaUm = prompt("Diga sua primeira tarefa do dia")
const tarefaDois = prompt("Diga sua segunta tarefa do dia")
const tarefaTres = prompt("Diga sua terceira tarefa do dia")

listaDeTarefas.push(tarefaUm)
listaDeTarefas.push(tarefaDois)
listaDeTarefas.push(tarefaTres)

console.log(listaDeTarefas)

const tarefaConcluida = prompt("anote o numero da tarefa feita, para eliminar:(0,1,2)")

listaDeTarefas.splice(tarefaConcluida, 1)
console.log(listaDeTarefas)
*/

//--------------------------------------------------------------------------------------------------------------------------------


                                             // DESAFIOS:
//--------------------------------------------------------------------------------------------------------------------------------

//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
/*
const frase = prompt("digite uma frase!")
const array = frase.split(" ")
console.log(array)
*/

//--------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------

// 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

/*
const frutas = ["banana", "morango", "abacaxi", "laranja", "ameixa"]
const abacaxiPosicao = frutas.indexOf("abacaxi")
console.log("Posiçao do abacaxi:", abacaxiPosicao)
console.log ("Quantidades de frutas no array:", frutas.length)
*/