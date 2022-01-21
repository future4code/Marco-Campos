// Exercicio 1 -------------------------------------------------------------------------------------------------------------------------------------

// function checaTriangulo(a:number, b:number, c:number) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

//   console.log(checaTriangulo(22, 55 , 35))

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Exercicio 2 ------------------------------------------------------------------------------------------------------------------------------------- 

// function imprimeTresCoresFavoritas() {
//     const cor1:string = process.argv[2]
//     const cor2:string = process.argv[3]
//     const cor3:string = process.argv[4]
//     console.log([cor1, cor2, cor3])
//  }
 
//  imprimeTresCoresFavoritas()

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Exercicio 3 ------------------------------------------------------------------------------------------------------------------------------------- 

// function checaAnoBissexto(ano:number) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     console.log( cond1 || cond2)
//  }

//  checaAnoBissexto(2008)

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Exercicio 4 ------------------------------------------------------------------------------------------------------------------------------------- 

// function comparaDoisNumeros(num1:number, num2:number) {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     console.log(diferenca)
//   }
//   comparaDoisNumeros(2, 1555555555555555)

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Exercicio 5 ------------------------------------------------------------------------------------------------------------------------------------- 

// function checaRenovacaoRG() {
//    const anoAtual = Number(process.argv[2]) //"Digite o ano atual"
//    const anoNascimento = Number(process.argv[3])   //"Digite o ano de nascimento"
//    const anoEmissao = Number(process.argv[4]) //"Digite o ano de emissão do documento"

//    const idade = anoAtual - anoNascimento
//    const tempoCarteira = anoAtual - anoEmissao

//    const cond1 = idade <= 20 && tempoCarteira >= 5
//    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
//    const cond3 = idade > 50 && tempoCarteira >= 15

//    console.log (cond1 || cond2 || cond3)
// }

// checaRenovacaoRG()
