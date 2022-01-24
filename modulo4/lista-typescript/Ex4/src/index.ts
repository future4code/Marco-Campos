// crie um `ENUM` para os setores e um `type` para as pessoas colaboradoras.
// crie uma função que receba este `array`como parâmetro
// retorne apenas as pessoas do setor de de marketing que trabalham presencialmente. 

enum Setores {       
    MARKETING ="marketing",
    VENDAS ="vendas",
    FINANCEIRO ="financeiro"
    }

type pessoaColaboradora = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

const array: pessoaColaboradora[] = [
	{ nome: "Marcos", salário: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Setores.MARKETING, presencial: true }
]

const retornaPessoa = (arr:pessoaColaboradora[]) => {
    const newArr: pessoaColaboradora[]= []
    return arr.filter((obj: pessoaColaboradora)=>{          
        if(obj.setor.includes("marketing") === false){
            newArr.push({ nome: obj.nome, salário: obj.salário, setor: obj.setor, presencial: obj.presencial, })
        }else{return "erro"}
    })
}

console.log(retornaPessoa(array))