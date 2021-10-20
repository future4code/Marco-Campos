// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
     return array.sort((a,b)=>{
        if(a>b) return 1
        if(a<b) return -1
        return 0
     })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const retornaPares = (array) => {
        return array % 2 === 0
    }
    const arrPares = array.filter(retornaPares)
    return arrPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const retornaPares = (array) => {
        return array % 2 === 0
    }
    const arrPares = array.filter(retornaPares)

    const retornaParesElevados = (array) =>{
        return array ** 2
    }
    const arrElevados = arrPares.map(retornaParesElevados)
        return arrElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const arrCrescente = array.sort((a,b)=>{
        if(a>b) return 1
        if(a<b) return -1
        return 0
     }) 
     return arrCrescente.pop()
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero 
    let menorNumero 

    if(num1>num2){
        maiorNumero = num1
        menorNumero = num2        
    }else {
        maiorNumero = num2
        menorNumero = num1    
    }
        
    const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    const diferenca = maiorNumero - menorNumero

    const numeros = 
    {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca
    }

    return numeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeroPar = 0
    let arr =[0,]

    while(arr.length <= n-1){
        numeroPar += 2
        arr.push(numeroPar)
    }

    return arr
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    }
    else if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return "Equilátero"
    }
    else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrOrdenado = array.sort((a,b)=>a-b)

    const segundoMaior = arrOrdenado[arrOrdenado.length -2]
    const segundoMenor = arrOrdenado[1]

    const arrResultado = [segundoMaior, segundoMenor]
    return arrResultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const chamadaFilme = {
        ...filme
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.` 
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let nomeAnonimo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return nomeAnonimo  
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
            return true
        }
    })
    return pessoasAutorizadas          
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        if (pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60){
            return true
        }
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const contaComSaldoAtualizado = (conta) =>{
        let soma = conta.compras.reduce((acc,cur) => acc + cur,0)
        let saldo = conta.saldoTotal
        return{...conta, saldoTotal: saldo - soma, compras: []}
    }
    return contas.map(contaComSaldoAtualizado)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}