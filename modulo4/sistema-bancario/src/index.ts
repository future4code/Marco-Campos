import express, { Request, Response } from "express";
import { ppid } from "process";

const app = express();

app.use(express.json());

app.listen( 3003, () => {
    console.log("o servidor esta disponivel na porta 3003")
})

app.get("/test", (req:Request, res:Response) =>{
    res.send("ok").status(200)
    console.log("ok")
})

// Crie um **tipo** para representar uma conta para o usuário

type User = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato : transacao[]
}

// Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
type transacao = {
    valor: number,
    data: string, 
    descricao: string
}

// Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
// Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
const users: User[] = [
    {
        nome: "Raphael",
        cpf: "111.111.456.89",
        dataNascimento: "27/11/1998",
        saldo: 50000,
        extrato : [
            {
                valor: 100,
                data: "11/05/2021", 
                descricao: "pix"
            },
            {
                valor: 500,
                data: "11/05/2021", 
                descricao: "pix"
            }
        ]
    },
    {
        nome: "Roberta",
        cpf: "111.121.456.89",
        dataNascimento: "16/02/1983",
        saldo: 5000,
        extrato : [
            {
                valor: 1000,
                data: "20/04/2021", 
                descricao: "transferencia"
            },
            {
                valor: 200,
                data: "15/05/2021", 
                descricao: "pix"
            }
        ]
    },
    {
        nome: "Stephanie",
        cpf: "144.111.456.89",
        dataNascimento: "06/05/2002",
        saldo: 100,
        extrato : [
            {
                valor: 10,
                data: "21/08/2021", 
                descricao: "pix"
            },
            {
                valor: 50,
                data: "01/10/2021", 
                descricao: "pix"
            }
        ]
    },

]

    let cpfsBanco: number[] = []

    const converterCpf = () => {
        const cpfBanco =users.map((user)=>{
            const splitCpfBanco = user.cpf.split(".", 4)
            return Number(splitCpfBanco[0]+splitCpfBanco[1]+splitCpfBanco[2]+splitCpfBanco[3])
        })
        cpfsBanco = cpfBanco
    }
    converterCpf()

// Crie um endpoint  que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários.
// Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
// Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar.
// Caso não possua exiba uma mensagem de erro.

app.post("/users/signUp", (req: Request, res: Response) =>{
    let errorCode = 400        
    let data = new Date()
    let dia = String(data.getDate()).padStart(2, '0')
    let mes = String(data.getMonth() + 1).padStart(2, '0')
    let ano = data.getFullYear()

    try{
        const nome = req.body.nome
        const dataNascimento = req.body.dataNascimento
        const cpf = req.body.cpf

        if(!nome){
            errorCode = 404
            throw new Error("Está faltando o Nome")
        }
        if(!dataNascimento){
            errorCode = 404
            throw new Error("Está faltando a Data de Nascimento")
        }
        if(!cpf){
            errorCode = 404
            throw new Error("Está faltando o Cpf")
        }

        const splitCpf = cpf.split(".", 4)
        const CpfNumerico = Number(splitCpf[0]+splitCpf[1]+splitCpf[2]+splitCpf[3])
        const dataNascimentoArr = dataNascimento.split("/", 3)

        const idade = Number(ano) - Number(dataNascimentoArr[2])
        let resultadoIdade = idade



        if(Number(mes) < Number(dataNascimentoArr[1]) || Number(mes) == Number(dataNascimentoArr[1]) && Number(dia) < Number(dataNascimentoArr[0])){
            resultadoIdade =  idade -1
        }

        if(resultadoIdade<=17){
            errorCode = 422
            throw new Error("data de nascimento invalida")
        }

        const body: User[] = [{
            nome: nome,
            cpf: cpf,
            dataNascimento: dataNascimento,
            saldo: 0,
            extrato : []
        }]

        const newArr: User[] = body
        const arrComb = [...body, ...users]

        console.log(CpfNumerico)
        res.send(arrComb)

    } catch (error: any){
        res.status(errorCode).send({message: error.message})
    }
})

// Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.

app.get("/",(req: Request,res: Response) =>{
    res.send(users)
})


    const conferirCpf = (cpf:number[], cpfNovo:number) => {
        const cpfBanco =users.filter((user)=>{
            
        })
    }