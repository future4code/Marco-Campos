// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("digite uma altura")
  const largura = prompt("digite uma largura")

  console.log(Number(altura)*Number(largura))
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("digite o ano atual:")
  const anoDeNascimento = prompt("digite o seu ano de nascimento")

  console.log(Number(anoAtual)-Number(anoDeNascimento))
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("digite seu nome")
  const idade = prompt("digite sua idade")
  const email = prompt("digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("digite sua primeira cor favorita")
  const cor2 = prompt("digite sua segunda cor favorita")
  const cor3 = prompt("digite sua terceira cor favorita")
  const coresPreferidas = [cor1, cor2, cor3]

  console.log(coresPreferidas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const texto = string
  const textoMaiusculo = texto.toUpperCase()
   
  return textoMaiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const valorDoEspetaculo = custo
  const valorDoIngresso = valorIngresso
  const quantidadeDeIngresso = custo / valorIngresso 
 
  return quantidadeDeIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const primeiroTexto = string1
  const segundoTexto = string2
  const igualdadeTexto = primeiroTexto.length === segundoTexto.length
 
  return igualdadeTexto
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const lista = array
  
  return lista[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const lista = array

  return lista [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const lista = array
  const primeiroElemento = array[0]
  const segundoElemento = array [array.length -1]

  array[0] = segundoElemento 
  array[array.length -1] = primeiroElemento
  
 return array


}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const texto1 = string1.toUpperCase()
  const texto2 = string2.toUpperCase()
  const igualdade = texto2 === texto1

  return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("em que ano estamos?")
  const anoDeNascimento = prompt ("Qual seu ano de nascença?")
  const anoDeEmissaoIdentidade = prompt("qual ano sua carteira de identidade foi emitida?")
  const idade = anoAtual - anoDeNascimento
  const idadeDaCarteira = anoAtual - anoDeEmissaoIdentidade

   const renovacaoCincoAnos = (idade <= 20 && idadeDaCarteira >= 5)
   const renovacaoDezAnos = (idade > 20, idade <= 50  && idadeDaCarteira >= 10)
   const renovacaoQuinzeAnos = (idade > 50 && idadeDaCarteira >= 15)

  console.log(renovacaoCincoAnos || renovacaoDezAnos || renovacaoQuinzeAnos )

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiploDe400 = ano % 400 === 0
  const multiploDe4 = ano % 4 === 0
  const multiploDe100 = ano % 100 != 0

  const anosBissextos = multiploDe4 && multiploDe100 || multiploDe400
   
  return anosBissextos
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("voce tem mais de 18 anos?")
  const ensinoMedio = prompt("voce terminou o ensino medio?")
  const disponibilidade = prompt("voce tem disponibilidade exclusiva durante os horarios do curso?")

  const bool1 = idade === "sim"
  const bool2 = ensinoMedio === "sim" 
  const bool3 = disponibilidade === "sim"

  const pode = (bool1 && bool2 && bool3)



  console.log (pode)


}