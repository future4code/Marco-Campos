import {data} from './data.js'
import express, { Request, Response } from "express"
import { setDefaultResultOrder } from 'dns'
import { Console } from 'console'

const app = express()
app.use(express.json())


app.listen(3003, () => {
    console.log("o servidor está disponível na porta 3003")
})



// 1- Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método GET
// no path “/test” que retorna uma mensagem genérica avisando que a API está funcional. 

app.get("/test",(req,res)=>{
    console.log("sua requisição foi enviada com sucesso")
    res.send("sua requisição foi enviada com sucesso")
})

// 2- Crie um arquivo chamado **`data.js`** que exporta um array de produtos. Cada produto será representado
// por um objeto com propriedades: id (`string`), name (`string`) e price (`number`).
// Popule manualmente o array com pelo menos 3 produtos.

const arrPoke: ArrPoke[] = data 

type ArrPoke = {
    id: string,
    name: string ,
    price: number
}

// 3- Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada.
// A id do produto deve ser gerada automaticamente pela API.

app.post("/createPokemon", (req:Request, res:Response)=>{
    const name = req.body.name
    const price = req.body.price

    // if(!name){
    //     return res.send("está faltando o campo name ").status(401)
    // }

    // if(!price && price !== 0){
    //     return res.send("está faltando o campo price ").status(401)
    // }

    // if(typeof name !== "string"){
    //     return res.send("tipo do name inválido").status(422)
    // }

    // if(typeof price !== "number" || price <= 0){
    //     return res.send("tipo de price inválido").status(422)
    // }

    const newPokemon: ArrPoke ={
        id:Date.now().toString() ,
        name,
        price 
    }

    arrPoke.push(newPokemon)

    console.log("pokemon adicionado com sucesso")
    res.send(arrPoke).status(200)
})

// 4- Crie um endpoint que retorna todos os produtos.

app.get("/getAllPokemons", (req:Request, res:Response)=>{
    res.send(arrPoke).status(200)
})

// 5- Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.

app.put("/editPokemon/:id", (req:Request, res:Response)=>{

})

// 6- Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.

app.delete("/deletePokemon/:id", (req:Request, res:Response)=>{
    const id = req.path
    arrPoke.splice(Number(id), 1)
    res.send(arrPoke)
})

// 7- Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados fluxos de validação
// dos dados recebidos (`name` e `price`)
// - erro caso um ou nenhum deles forem recebidos
// - erro caso `name` seja diferente de `string`
// - erro caso `price` seja diferente de `number`
// - erro caso `price` seja igual ou menor que `0`
// - erro caso algo inesperado aconteça



// 8- Refatore o endpoint do exercício 5 (editar produto) para que sejam 
// implementados fluxos de validação dos dados recebidos (`price`)
// - erro caso `price` não seja recebido
// - erro caso `price` seja diferente de `number`
// - erro caso `price` seja igual ou menor que `0`
// - erro caso id não seja recebida
// - erro caso o produto a ser editado não seja encontrado
// - erro caso algo inesperado aconteça



// 9- Refatore o endpoint do exercício 6 (deletar produto) para que sejam
// implementados fluxos de validação dos dados recebidos (`id`)
//- erro caso `id` não seja recebido
//- erro caso o produto escolhido não seja encontrado
//- erro caso algo inesperado aconteça