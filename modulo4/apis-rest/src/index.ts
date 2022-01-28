import express, { Request, Response } from "express"

const app = express();
app.use(express.json());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type Users = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: Users[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

app.listen( 3003, () => {
    console.log("o servidor esta disponivel na porta 3003")
})


app.get("/test", (req,res)=>{
    console.log("sucesso!")
    res.send("sucesso!").status(200)
})

// 1-Faça um endpoint que busque todos os usuários de uma lista.

// a. Qual método HTTP você deve utilizar para isso?
    // Método GET

// b. Como você indicaria a entidade que está sendo manipulada?
    // Passando ela como rota da requisição

app.get("/users", (req:Request ,res:Response) => {
    let errorCode:number = 400
    try{
        if(!users){
            errorCode = 404
            throw new Error('Not Found')
        }
        console.log("sucesso!")

        res.send(users).status(200)

    } catch(error: any){
        res.status(errorCode).send({message: error.message})
    }
})

// 2-Criar um novo endpoint, que busque todos os usuários que tenham uma propriedade `type` específica,
//   recebendo apenas um `type` por vez. Após isso, responda:

// a. Como você passou os parâmetros de type para a requisição? Por quê?
    //com queryParams, pôs é o mais indicado pra usar filtros

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?


app.get("/users/type", (req:Request, res:Response) => {
    let errorCode: number = 400
    try{
        const type = req.query.type

        if(!type){
            errorCode = 404
            throw new Error('Not Found')
        } 

        const newUsers = users.filter((user)=>{
            return user.type === type
        }).map((user)=>{
            return user
        })

        res.send(newUsers).status(200)

   } catch (error: any) {
        res.status(errorCode).send({message: error.message})
   }

})


//  3- Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando ****por **nome**.

//  a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*

//  b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.









