
const operacao = process.argv[2]
const valorUm = Number(process.argv[3])
const valorDois = Number(process.argv[4])

switch (operacao) {
    case "soma":
        console.log(`
        O valor da sua soma é: ${valorUm+valorDois}
        `)
        break;

    case "subtracao":
        console.log(`
        O valor da sua subtracao é: ${valorUm-valorDois}
        `)
        break;

    case "multiplicacao":
        console.log(`
        O valor da sua multiplicacao é: ${valorUm*valorDois}
        `)
        break;

    case "divisao":
        console.log(`
        O valor da sua divisao é: ${valorUm/valorDois}
        `)
        break;

    default:
        break;
}

