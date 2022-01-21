//Exercício 1 ---------------------------------------------------------------------------------------------------------------------------------
// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela.
//    Tente atribuir um número a esta variável. O que acontece?

        // const minhaString:string = 1
        // Aparece um erro no valor da variável (O tipo 'number' não pode ser atribuído ao tipo 'string'.)

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
//    Como fazer para que essa variável também aceite strings?
//    Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

        // const meuNumero:number | string = ""
        // Ultilizando o operador lógico |"ou" que diferente do Js aqui é representado por somente uma barra

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//    `nome`, que é uma string;
//    `idade`, que é um número;
//    `corFavorita`, que é uma string.

        // const pessoa: { nome:string, idade:number, corFavorita:string } = {
        //     nome:"",
        //     idade:0,
        //     corFavorita: ""
        // }

    // Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
    // Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

        // type pessoa = {
        //     nome:string, 
        //     idade:number, 
        //     corFavorita:string 
        //     }

        // const joao: pessoa = {
        //     nome:"joao", 
        //     idade:20, 
        //     corFavorita:"preto"
        //     }

        // const maria: pessoa = {
        //     nome:"maria", 
        //     idade:26, 
        //     corFavorita:"branco" 
        //     }

        // const jose: pessoa = {
        //     nome:"jose", 
        //     idade:35, 
        //     corFavorita:"azul"
        //     }

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris.
//    Utilize um enum para isso.

        // enum CorFavorita {
        //     VERMELHO="vermelho",
        //     LARANJA="laranja", 
        //     AMARELA="amarelo", 
        //     VERDE="verde", 
        //     AZUL="azul", 
        //     VIOLETA="violeta"
        //     }

        // type pessoa = {
        //     nome:string, 
        //     idade:number, 
        //     corFavorita:CorFavorita 
        // }
    
        // const joao: pessoa = {
        //     nome:"joao", 
        //     idade:20, 
        //     corFavorita:CorFavorita.AZUL
        // }

        // const maria: pessoa = {
        //     nome:"maria", 
        //     idade:26, 
        //     corFavorita:CorFavorita.VIOLETA
        // }

        // const jose: pessoa = {
        //     nome:"jose", 
        //     idade:35, 
        //     corFavorita:CorFavorita.VERDE
        // }

//---------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------