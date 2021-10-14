//------------------------------------------------------------------------------------------------------------------------------------

                                           //EXERCICIO DE INTERPRETAÇAO DE CODIGO:

//------------------------------------------------------------------------------------------------------------------------------------
 // 1. Leia o código abaixo:
    

 //     const respostaDoUsuario = prompt("Digite o número que você quer testar")
 //     const numero = Number(respostaDoUsuario)
     
 //     if (numero % 2 === 0) {
 //       console.log("Passou no teste.")
 //     } else {
 //       console.log("Não passou no teste.")
 //     }  

     
 //     a) Explique o que o código faz. Qual o teste que ele realiza?          
            
 //para saber se são números pares
     
 //     b) Para que tipos de números ele imprime no console "Passou no teste"? 
 
 //todos os números que o resto da divisão por 2 seja igual a 0
    
 //     c) Para que tipos de números a mensagem é "Não passou no teste"?       
 
 //todos os números que o resto da divisão por 2 seja diferente de 0

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //     break; // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    
    //     a) Para que serve o código acima?

    //mostrar ao usuario o valor das frutas
    
    //     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    //O preço da fruta maça é R$ 2.25
    
    //     c) Considere que um usuário queira comprar uma `Pêra`, 
    //     qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default`
    //     (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

    //ele vai trocar o preço da pêra pelo ultimo valor da lista 

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 3. Leia o código abaixo:
    

    // const numero = Number(prompt("Digite o primeiro número."))
    
    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }
    
    // console.log(mensagem)

    
    // a) O que a primeira linha está fazendo?

    //definindo uma variavel chamada numero que o valor vem por meio do usuario pelo prompt
    
    // b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    //digitando o numero 10 o console imprime a mensagem "Esse número passou no teste"
    //caso digite -10 nao nao iria imprimir nada
    
    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

    //sim, o "console.log(mensagem)" nao tem acesso ao escopo da variavel mensagem

//------------------------------------------------------------------------------------------------------------------------------------

                                          // EXERCICIOS DE ESCRITA DE CODIGO:

//------------------------------------------------------------------------------------------------------------------------------------


 // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
 //     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
 //     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
 //     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
 //      Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`



 // const respostaDoUsuario = prompt("digite a sua idade") 
 // const idade = Number(respostaDoUsuario)

 // if (idade >= 18){
 //     console.log("Você pode dirigir")
 // } else {
 //     console.log("Você não pode dirigir")
 //}

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 2. Agora faça um programa que verifica que turno do dia um aluno estuda.
 //    Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
 //    Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
 //     - 💡 Dica
        
 //         Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
 //         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
        
 //         Se o usuário digitar "V", a saída deve ser:
        
 //         "Boa Tarde!"



 // function verificarHorario()  {

 //         const respostaAluno = prompt("digite (m) se estuda de manha, (v) a tarde ou (n) a noite")
 //         const aluno = {
 //             estudaManha : "m" ,
 //             estudaTarde : "v" ,
 //             estudaNoite : "n"
 //         }

 //         if (respostaAluno === "m") {
 //             console.log("Bom Dia!")
 //         } else if (respostaAluno === "v"){
 //             console.log("Boa tarde!")
 //         } else if (respostaAluno === "n"){
 //             console.log("Boa noite!")
 //         }

 // } 

 // verificarHorario()


//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
 // - 💡 Dica
     
 //     Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)



 // let horarioEstudo = prompt("digite (m) se estuda de manha, (v) a tarde ou (n) a noite")
 // switch (horarioEstudo) {
 //     case "m" :
 //         console.log("Bom Dia!")
 //         break;
 //     case "v" :
 //         console.log("Boa tarde!")
 //         break;
 //     case "n" :
 //         console.log("Boa noite!")
 //         break;    

 //     default:
 //         console.log("horario nao encontrado!")
 //         break;
 // }



//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 //  4. Considere a situação: você vai ao cinema com um amigo ou amiga,
 //   porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
 //   **e** se o ingresso está abaixo de 15 reais. 

 //    Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
 //     e outra pergunta sobre o preço do ingresso,
 //      então verifique se seu amigo ou amiga vai topar assistir o filme.
 //       Caso positivo, imprima no console a mensagem: `"Bom filme!"`,
 //        caso contrário, imprima `"Escolha outro filme :("`


 // const generoDoFilme = prompt("Qual o gênero de filme que vão assistir?")
 // const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))
 // const generoAssistido = generoDoFilme === "fantasia"
 // const precoPago = precoDoIngresso <= 15
 
 // if (generoAssistido && precoPago) {
 //     console.log("Bom filme!")
 // } else {
 //     console.log("Escolha outro filme :(")
 // }



//------------------------------------------------------------------------------------------------------------------------------------

                                          //DESAFIOS:

//------------------------------------------------------------------------------------------------------------------------------------

 //1. Modifique o código do exercício 4 de escrita de código para,
 //  antes de imprimir a mensagem `"Bom filme!"`,
 //   pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
 //    e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`,
 //     trocando [LANCHINHO] pelo que o usuário colocou no input. 
 
 //     - Exemplo
         
 //         Entradas: `"fantasia"` | `"10"`
          
 //         Saída:
 //         [prompt] Qual snack que você quer comprar?


 //         Entrada: `"chocolate"`
         
 //         Saída:
 //         "Bom filme!"
 //         "Aproveite o seu chocolate"


 //  const generoDoFilme = prompt("Qual o gênero de filme que vão assistir?")
 //  const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))
 //  const generoAssistido = generoDoFilme === "fantasia"
 //  const precoPago = precoDoIngresso <= 15
 
 //  if (generoAssistido && precoPago) {
 //      const lanche = prompt ("Qual lanche voce vai comprar?")
 //      console.log(`Bom filme! e aproveite seu(sua) ${lanche} `)
 //  } else {
 //      console.log("Escolha outro filme :(")
 //  }
 

 //------------------------------------------------------------------------------------------------------------------------------------
 //------------------------------------------------------------------------------------------------------------------------------------

    //2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol.
    //  Para esta compra, o usuário deve fornecer algumas informações:
    // - Nome completo;
    // - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    // - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    // - Categoria: pode ser as opções 1, 2, 3 ou 4;
    // - Quantidade de ingressos
    
    //     O seu sistema deve solicitar estas informações ao usuário, através do `prompt` .
    //     Além disso, ele deve imprimir tudo isso,
    //     junto com o valor de cada ingresso e o valor total que o usuário tem que pagar 
    //     (ou seja, o valor unitário do ingresso multiplicado pela quantidade).
    //     Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa.
    //     Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos,
    //     mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
    
        
    // - Exemplo de saída: Jogo Nacional                       .// - Exemplo de saída: Jogo Internacional
    //                                                         .//      
    //     ---Dados da compra---                               .//     ---Dados da compra---
    //     Nome do cliente:  Soter Padua                       .//     Nome do cliente:  Soter Padua 
    //     Tipo do jogo:  Nacional                             .//     Tipo do jogo:  Internacional
    //     Etapa do jogo:  Final                               .//     Etapa do jogo:  Final
    //     Categoria:  1                                       .//     Categoria:  1 
    //     Quantidade de Ingressos:  10 ingressos              .//     Quantidade de Ingressos:  10 ingressos
    //     ---Valores---                                       .//     ---Valores--- 
    //     Valor do ingresso:  R$ 1980                         .//     Valor do ingresso:  U$ 482.92682926829275
    //     Valor total:  R$ 19800                              .//     Valor total:  U$ 4829.2682926829275
        

        
        const nomeCompleto = prompt ("Qual seu nome completo?")
        const tipoDeJogo = prompt ("Qual o tipo de jogo? Digite(IN) para internacional ou (DO) para domestico").toUpperCase()
        const etapaDoJogo = prompt("Qual a etapa do jogo? Digite (SF) para semi-final ou (DT) para decisao de terceiro lugar ou (FI) para final").toUpperCase()
        const categoria = Number (prompt("Qual a categoria do seu ingresso(numero de 1 a 4)"))
        const quantidadeDeIngresso = Number (prompt("Qual a quantidade de ingressos?"))
        
        const jogoNacionalSF = {
            categoria1SF = 1320,
            categoria2SF = 880 ,
            categoria3SF = 550 ,
            categoria4SF = 220   
        }

        const jogoNacionalDT = {
            categoria1SF = 660 ,
            categoria2SF = 440 ,
            categoria3SF = 330 ,
            categoria4SF = 170  
        }

        const jogoNacionalFI = {
            categoria1SF = 1980 ,
            categoria2SF = 1320 ,
            categoria3SF = 880 ,
            categoria4SF = 330 
        }

        const jogoInterSF = {
            categoria1SF =1320*4.10,
            categoria2SF =880*4.10,
            categoria3SF =550*4.10 ,
            categoria4SF =220*4.10  
        }

        const jogoInterDT = {
            categoria1SF = 660*4.10 ,
            categoria2SF = 440*4.10 ,
            categoria3SF = 330*4.10 ,
            categoria4SF = 170*4.10  
        }

        const jogoInterFI = {
            categoria1SF = 1980*4.10 ,
            categoria2SF = 1320*4.10 ,
            categoria3SF = 880*4.10 ,
            categoria4SF = 330*4.10 
        }

              if (tipoDeJogo === "IN"){

                  if (etapaDoJogo === "SF"){

                      if (categoria === 1){
                      console.log(`
                      ---Dados da compra---
                      Nome do cliente : ${nomeCompleto}
                      tipo de jogo : Internacional
                      Etapa do jogo : Semi Final
                      Categoria : 1
                      Quantidade de ingressos : ${quantidadeDeIngresso}
                      ---Valores---
                      Valor do ingresso = ${jogoInterSF.categoria1SF}
                      Valor total = ${jogoInterSF.categoria1SF*quantidadeDeIngresso}
                      `)
                    }

                     if (categoria === 2){
                         console.log(`
                            ---Dados da compra---
                         Nome do cliente : ${nomeCompleto}
                            tipo de jogo : Internacional
                         Etapa do jogo : Semi Final
                         Categoria : 2
                         Quantidade de ingressos : ${quantidadeDeIngresso}
                         ---Valores---
                         Valor do ingresso = ${jogoInterSF.categoria2SF}
                         Valor total = ${jogoInterSF.categoria2SF*quantidadeDeIngresso}
                         `)
                    } 
                         
                     if (categoria === 3){
                         console.log(`
                         ---Dados da compra---
                         Nome do cliente : ${nomeCompleto}
                         tipo de jogo : Internacional
                         Etapa do jogo : Semi Final
                         Categoria : 3
                         Quantidade de ingressos : ${quantidadeDeIngresso}
                         ---Valores---
                         Valor do ingresso = ${jogoInterSF.categoria3SF}
                         Valor total = ${jogoInterSF.categoria3SF*quantidadeDeIngresso}
                         `)
                     }
                     if (categoria === 4){
                         console.log(`
                         ---Dados da compra---
                         Nome do cliente : ${nomeCompleto}
                         tipo de jogo : Internacional
                         Etapa do jogo : Semi Final
                         Categoria : 4
                         Quantidade de ingressos : ${quantidadeDeIngresso}
                         ---Valores---
                         Valor do ingresso = ${jogoInterSF.categoria4SF}
                         Valor total = ${jogoInterSF.categoria4SF*quantidadeDeIngresso}
                         `)
                     }

                } 
                if (etapaDoJogo === "FI"){

                    if (categoria === 1){
                    console.log(`
                    ---Dados da compra---
                    Nome do cliente : ${nomeCompleto}
                    tipo de jogo : Internacional
                    Etapa do jogo : Final
                    Categoria : 1
                    Quantidade de ingressos : ${quantidadeDeIngresso}
                    ---Valores---
                    Valor do ingresso = ${jogoInterFI.categoria1FI}
                    Valor total = ${jogoInterFI.categoria1FI*quantidadeDeIngresso}
                    `)
                  }

                   if (categoria === 2){
                       console.log(`
                          ---Dados da compra---
                       Nome do cliente : ${nomeCompleto}
                          tipo de jogo : Internacional
                       Etapa do jogo : Final
                       Categoria : 2
                       Quantidade de ingressos : ${quantidadeDeIngresso}
                       ---Valores---
                       Valor do ingresso = ${jogoInterFI.categoria2FI}
                       Valor total = ${jogoInterFI.categoria2FI*quantidadeDeIngresso}
                       `)
                  } 
                       
                   if (categoria === 3){
                       console.log(`
                       ---Dados da compra---
                       Nome do cliente : ${nomeCompleto}
                       tipo de jogo : Internacional
                       Etapa do jogo : Final
                       Categoria : 3
                       Quantidade de ingressos : ${quantidadeDeIngresso}
                       ---Valores---
                       Valor do ingresso = ${jogoInterFI.categoria3FI}
                       Valor total = ${jogoInterFI.categoria3FI*quantidadeDeIngresso}
                       `)
                   }
                   if (categoria === 4){
                       console.log(`
                       ---Dados da compra---
                       Nome do cliente : ${nomeCompleto}
                       tipo de jogo : Internacional
                       Etapa do jogo : Final
                       Categoria : 4
                       Quantidade de ingressos : ${quantidadeDeIngresso}
                       ---Valores---
                       Valor do ingresso = ${jogoInterFI.categoria4FI}
                       Valor total = ${jogoInterFI.categoria4FI*quantidadeDeIngresso}
                       `)
                   }

              } 

              if (etapaDoJogo === "DT"){

                if (categoria === 1){
                console.log(`
                ---Dados da compra---
                Nome do cliente : ${nomeCompleto}
                tipo de jogo : Internacional
                Etapa do jogo : Terceiro Lugar
                Categoria : 1
                Quantidade de ingressos : ${quantidadeDeIngresso}
                ---Valores---
                Valor do ingresso = ${jogoInterDT.categoria1DT}
                Valor total = ${jogoInterDT.categoria1DT*quantidadeDeIngresso}
                `)
              }

               if (categoria === 2){
                   console.log(`
                      ---Dados da compra---
                   Nome do cliente : ${nomeCompleto}
                      tipo de jogo : Internacional
                   Etapa do jogo : Terceiro Lugar
                   Categoria : 2
                   Quantidade de ingressos : ${quantidadeDeIngresso}
                   ---Valores---
                   Valor do ingresso = ${jogoInterDT.categoria2DT}
                   Valor total = ${jogoInterDT.categoria2DT*quantidadeDeIngresso}
                   `)
              } 
                   
               if (categoria === 3){
                   console.log(`
                   ---Dados da compra---
                   Nome do cliente : ${nomeCompleto}
                   tipo de jogo : Internacional
                   Etapa do jogo : Terceiro Lugar
                   Categoria : 3
                   Quantidade de ingressos : ${quantidadeDeIngresso}
                   ---Valores---
                   Valor do ingresso = ${jogoInterDT.categoria3DT}
                   Valor total = ${jogoInterDT.categoria3DT*quantidadeDeIngresso}
                   `)
               }
               if (categoria === 4){
                   console.log(`
                   ---Dados da compra---
                   Nome do cliente : ${nomeCompleto}
                   tipo de jogo : Internacional
                   Etapa do jogo : Terceiro Lugar
                   Categoria : 4
                   Quantidade de ingressos : ${quantidadeDeIngresso}
                   ---Valores---
                   Valor do ingresso = ${jogoInterDT.categoria4DT}
                   Valor total = ${jogoInterDT.categoria4DT*quantidadeDeIngresso}
                   `)
               }

          } 
            
            } //
              else if (tipoDeJogo === "DO"){

                if (etapaDoJogo === "SF"){

                    if (categoria === 1){
                    console.log(`
                    ---Dados da compra---
                    Nome do cliente : ${nomeCompleto}
                    tipo de jogo : Internacional
                    Etapa do jogo : Semi Final
                    Categoria : 1
                    Quantidade de ingressos : ${quantidadeDeIngresso}
                    ---Valores---
                    Valor do ingresso = ${jogoInterSF.categoria1SF}
                    Valor total = ${jogoInterSF.categoria1SF*quantidadeDeIngresso}
                    `)
                  }

                   if (categoria === 2){
                       console.log(`
                          ---Dados da compra---
                       Nome do cliente : ${nomeCompleto}
                          tipo de jogo : Internacional
                       Etapa do jogo : Semi Final
                       Categoria : 2
                       Quantidade de ingressos : ${quantidadeDeIngresso}
                       ---Valores---
                       Valor do ingresso = ${jogoInterSF.categoria2SF}
                       Valor total = ${jogoInterSF.categoria2SF*quantidadeDeIngresso}
                       `)
                  } 
                       
                   if (categoria === 3){
                       console.log(`
                       ---Dados da compra---
                       Nome do cliente : ${nomeCompleto}
                       tipo de jogo : Internacional
                       Etapa do jogo : Semi Final
                       Categoria : 3
                       Quantidade de ingressos : ${quantidadeDeIngresso}
                       ---Valores---
                       Valor do ingresso = ${jogoInterSF.categoria3SF}
                       Valor total = ${jogoInterSF.categoria3SF*quantidadeDeIngresso}
                       `)
                   }
                   if (categoria === 4){
                       console.log(`
                       ---Dados da compra---
                       Nome do cliente : ${nomeCompleto}
                       tipo de jogo : Internacional
                       Etapa do jogo : Semi Final
                       Categoria : 4
                       Quantidade de ingressos : ${quantidadeDeIngresso}
                       ---Valores---
                       Valor do ingresso = ${jogoInterSF.categoria4SF}
                       Valor total = ${jogoInterSF.categoria4SF*quantidadeDeIngresso}
                       `)
                   }

              } 
              if (etapaDoJogo === "FI"){

                  if (categoria === 1){
                  console.log(`
                  ---Dados da compra---
                  Nome do cliente : ${nomeCompleto}
                  tipo de jogo : Internacional
                  Etapa do jogo : Final
                  Categoria : 1
                  Quantidade de ingressos : ${quantidadeDeIngresso}
                  ---Valores---
                  Valor do ingresso = ${jogoInterFI.categoria1FI}
                  Valor total = ${jogoInterFI.categoria1FI*quantidadeDeIngresso}
                  `)
                }

                 if (categoria === 2){
                     console.log(`
                        ---Dados da compra---
                     Nome do cliente : ${nomeCompleto}
                        tipo de jogo : Internacional
                     Etapa do jogo : Final
                     Categoria : 2
                     Quantidade de ingressos : ${quantidadeDeIngresso}
                     ---Valores---
                     Valor do ingresso = ${jogoInterFI.categoria2FI}
                     Valor total = ${jogoInterFI.categoria2FI*quantidadeDeIngresso}
                     `)
                } 
                     
                 if (categoria === 3){
                     console.log(`
                     ---Dados da compra---
                     Nome do cliente : ${nomeCompleto}
                     tipo de jogo : Internacional
                     Etapa do jogo : Final
                     Categoria : 3
                     Quantidade de ingressos : ${quantidadeDeIngresso}
                     ---Valores---
                     Valor do ingresso = ${jogoInterFI.categoria3FI}
                     Valor total = ${jogoInterFI.categoria3FI*quantidadeDeIngresso}
                     `)
                 }
                 if (categoria === 4){
                     console.log(`
                     ---Dados da compra---
                     Nome do cliente : ${nomeCompleto}
                     tipo de jogo : Internacional
                     Etapa do jogo : Final
                     Categoria : 4
                     Quantidade de ingressos : ${quantidadeDeIngresso}
                     ---Valores---
                     Valor do ingresso = ${jogoInterFI.categoria4FI}
                     Valor total = ${jogoInterFI.categoria4FI*quantidadeDeIngresso}
                     `)
                 }

            } 

            if (etapaDoJogo === "DT"){

              if (categoria === 1){
              console.log(`
              ---Dados da compra---
              Nome do cliente : ${nomeCompleto}
              tipo de jogo : Internacional
              Etapa do jogo : Terceiro Lugar
              Categoria : 1
              Quantidade de ingressos : ${quantidadeDeIngresso}
              ---Valores---
              Valor do ingresso = ${jogoInterDT.categoria1DT}
              Valor total = ${jogoInterDT.categoria1DT*quantidadeDeIngresso}
              `)
            }

             if (categoria === 2){
                 console.log(`
                    ---Dados da compra---
                 Nome do cliente : ${nomeCompleto}
                    tipo de jogo : Internacional
                 Etapa do jogo : Terceiro Lugar
                 Categoria : 2
                 Quantidade de ingressos : ${quantidadeDeIngresso}
                 ---Valores---
                 Valor do ingresso = ${jogoInterDT.categoria2DT}
                 Valor total = ${jogoInterDT.categoria2DT*quantidadeDeIngresso}
                 `)
            } 
                 
             if (categoria === 3){
                 console.log(`
                 ---Dados da compra---
                 Nome do cliente : ${nomeCompleto}
                 tipo de jogo : Internacional
                 Etapa do jogo : Terceiro Lugar
                 Categoria : 3
                 Quantidade de ingressos : ${quantidadeDeIngresso}
                 ---Valores---
                 Valor do ingresso = ${jogoInterDT.categoria3DT}
                 Valor total = ${jogoInterDT.categoria3DT*quantidadeDeIngresso}
                 `)
             }
             if (categoria === 4){
                 console.log(`
                 ---Dados da compra---
                 Nome do cliente : ${nomeCompleto}
                 tipo de jogo : Internacional
                 Etapa do jogo : Terceiro Lugar
                 Categoria : 4
                 Quantidade de ingressos : ${quantidadeDeIngresso}
                 ---Valores---
                 Valor do ingresso = ${jogoInterDT.categoria4DT}
                 Valor total = ${jogoInterDT.categoria4DT*quantidadeDeIngresso}
                 `)
             }

        } 
       }

              else {
                  console.log("tipo de jogo inválido")
              }
        