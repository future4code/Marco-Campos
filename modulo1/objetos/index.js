                                   //EXERCICIO DE INTERPRETAÇAO DE CODIGO:

//------------------------------------------------------------------------------------------------------------------------------------
//  1.  Leia o código abaixo
//      a) O que vai ser impresso no console?
     
  // const filme = {
  //     	nome: "Auto da Compadecida", 
  //     	ano: 2000, 
  //     	elenco: [
  //     		"Matheus Nachtergaele",
  //             "Selton Mello",
  //             "Denise Fraga", 
  //     		"Virginia Cavendish"
  //     		], 
  //     	transmissoesHoje: [
  //     		{canal: "Telecine", horario: "21h"}, 
  //     		{canal: "Canal Brasil", horario: "19h"}, 
  //     		{canal: "Globo", horario: "14h"}
  //     		]
  //     }
    
  //      console.log(filme.elenco[0])                            // Matheus Nachtergaele         
  //      console.log(filme.elenco[filme.elenco.length - 1])      // Virginia Cavendish        
  //      console.log(filme.transmissoesHoje[2])                  // canal: "Globo", horario: "14h"        
    
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 2. Leia o código abaixo
 // a) O que vai ser impresso no console?  
 // b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
 
    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro)                    //nome: "Juca", idade: 3, raca: "SRD"
    // console.log(gato)                        //nome: "Juba", idade: 3, raca: "SRD"
    // console.log(tartaruga)                   //nome: "Jubo", idade: 3, raca: "SRD"
                                                //A sintaxe dos 3 pontos faz uma copia do objeto para ser manipulada sem alterar objeto real

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------
   
 //3. Leia o código abaixo
 //a) O que vai ser impresso no console?
 //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

 
    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }
    
    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }
    
    // console.log(minhaFuncao(pessoa, "backender"))      // false
    // console.log(minhaFuncao(pessoa, "altura"))         // undefined
    //                                                    // no primeiro ele acessou a propriedade do objeto usando uma funçao
    //                                                    // no segundo deu undefined por nao ter nenhuma variavel declarada como "altura" 
//------------------------------------------------------------------------------------------------------------------------------------

                                    //EXERCICIO DE ESCRITA DE CODIGO:

//------------------------------------------------------------------------------------------------------------------------------------ 

// 1. Resolva os passos a seguir: 
    
//     a) Crie um objeto.
//        Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).
//        Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 
    

    // function minhaFuncao(nome, apelido) {
    //     const frase = `Eu sou ${nome}, mas pode me chamar de: ${apelido}`
    //     return frase
    // }

    // const pessoa = {
    //     nome: "Marco Raphael", 
    //     apelidos: ["Marquinho", " Raphinha", " Rapha"]
    // }

    //     const nome = pessoa.nome
    //     const apelidos = pessoa.apelidos

    //     console.log(minhaFuncao(nome,apelidos))
       

//     b) Agora, usando **o operador spread**,
//        crie um novo objeto mantendo o valor da propriedade nome,
//        mas com uma nova lista de três apelidos. Depois,
//        chame a função feita no item anterior passando como argumento o novo objeto

    // const pessoaNovo = {
    //     ...pessoa,
    //     apelidos:["mark","Phael","Marquito"]
    // }
    
    // console.log(minhaFuncao(nome, pessoaNovo.apelidos))

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 2. Resolva os passos a seguir: 
 //     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
 //     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
     
 //     1. O valor de `nome`
 //     2. O numero de caracteres do valor `nome`
 //     3. O valor de `idade`
 //     4. O valor de `profissão`
 //     5. O numero de caracteres do valor `profissão`

        // const pessoaUm = {
        //     nome: "Bruno", 
        //     idade: 23, 
        //     profissao: "Instrutor"
        // }

        // const pessoaDois = {
        //     nome: "Raphael", 
        //     idade: 22, 
        //     profissao: "Aluno"
        // }

        // function imprimir (pessoaUm, pessoaDois){
        //     const arrUm = [
        //         pessoaUm.nome,
        //         pessoaUm.nome.length,
        //         pessoaUm.idade,
        //         pessoaUm.profissao,
        //         pessoaUm.profissao.length,  

        //         pessoaDois.nome,
        //         pessoaDois.nome.length,
        //         pessoaDois.idade,
        //         pessoaDois.profissao,
        //         pessoaDois.profissao.length   
        //     ]


        //     return arrUm
        // }

        // console.log(imprimir(pessoaUm,pessoaDois))

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

 // 3. Resolva os passos a seguir: 
    
                //a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
//   const carrinho = []

                //b) Crie três novos objetos que representem frutas de um sacolão.
                //   Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
 
//   const fruta1 = {
//       nome : "banana",
//       disponibilidade : true
//   }

//   const fruta2  = {
//       nome : "maca",
//       disponibilidade : true
//   }

//   const fruta3  = {
//       nome : "kiwi",
//       disponibilidade : true
//   }

            //   c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
            //     Invoque essa função passando os três objetos criados. 
    
//  function adicionarCarrinho (fruta){
//      carrinho.push(fruta)
//  }

//  adicionarCarrinho(fruta1)
//  adicionarCarrinho(fruta2)
//  adicionarCarrinho(fruta3)

               //     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

//  console.log(carrinho)
        
//------------------------------------------------------------------------------------------------------------------------------------

                                                 //DESAFIOS:

//------------------------------------------------------------------------------------------------------------------------------------

// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
//     - Exemplo
        
//         // Exemplo de entrada: "Lais", 26, "Instrutora"
//         // O que deve ser impresso no console: 
//         { nome: 'Lais', profissao: "Instrutora", idade: 26}


    //    function dados (){
    //        const nome = prompt("Qual o seu nome?")
    //        const idade = prompt("Qual a sua idade?")
    //        const profissao = prompt("Qual a sua profissão?")

    //        console.log(`nome: ${nome}, profissao: ${profissao}, idade: ${idade}`)

    //    }

    //    dados()

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

// 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome.
//    A função deve retornar uma mensagem no seguinte modelo:
    
//     O primeiro filme foi lançado antes do segundo? false
//     O primeiro filme foi lançado no mesmo ano do segundo? true


    //    const filme1 = {
    //         nome : "Tropa de elite",
    //         anoDeLancamento : 2007
    //    }

    //    const filme2 = {
    //         nome : "Carandiru",
    //         anoDeLancamento : 2003
    //    }
       
    //    function filmes(filme1 , filme2){
    //        const primeiroFilme = filme1.anoDeLancamento < filme2.anoDeLancamento
    //        const comparaData = filme1.anoDeLancamento === filme2.anoDeLancamento
           
    //        console.log(`O primeiro filme foi lançado antes do segundo? ${primeiroFilme}`)
    //        console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparaData}`)
    //    }

    //    filmes(filme1,filme2)

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

// 3. Crie uma função a mais pro exercício 3 de escrita de código.
//  Essa função vai auxiliar o controle de estoque do sacolão: 
//  ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto
//  com a propriedade `disponibilidade` com o valor invertido.


        // function controlarEstoque(fruta){
        //     const disponibilidadeInvertido = {
        //         ...fruta,
        //         disponibilidade : false
        //     }
        //     return disponibilidadeInvertido
        // }

        // console.log (controlarEstoque(fruta1))
        
//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------