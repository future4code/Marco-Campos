// Crie um função que receba uma `string` com o nome
// e outra `string` com uma data de nascimento (ex.: “24/04/1993”).
// A função deve separar o dia, o mês e ano e retornar uma `string`
// no seguinte formato: 

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const RetornarFrase = (nome: string, data: string) => {

const nomeUser: string = nome
const dataNascimento: string = data

const stringDividida: string[] = dataNascimento.split('/', 3)

console.log(`Olá me chamo ${nomeUser}, nasci no dia ${stringDividida[0]} do mês de ${stringDividida[1]} do ano de ${stringDividida[2]}`)
}

RetornarFrase(process.argv[2], process.argv[3])

