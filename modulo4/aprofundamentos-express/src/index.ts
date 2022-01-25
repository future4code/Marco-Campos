import express from "express";

const app = express();
app.use(express.json());

app.listen(3003, () => {
    console.log("O servidor está em funcionamento na porta 3003")
})

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
    console.log("Pong! 🏓")
})

// Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”). Crie uma variável de tipo para representar cada afazer.

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

// Crie um array de afazeres para servir como base de dados da nossa API e utilize a tipagem desenvolvida no exercício anterior.

const arrTasks: ToDo[] = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 2,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 3,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      userId: 4,
      id: 4,
      title: "et porro tempora",
      completed: true
    },
    {
      userId: 5,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false
    },
    {
      userId: 6,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false
    },
    {
      userId: 7,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false
    },
    {
      "userId": 8,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true
    },
    {
      userId: 9,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false
    },
    {
      userId: 10,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true
    }
]

// Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status,
// ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

app.get('/tasks', (req, res)=>{
    const completedTask = req.query.completedTask

    console.log("funcionou")

    const arr:ToDo[] = arrTasks.filter((task: any)=>{
        if(completedTask === "true"){
            return task.completed === true
        }else if(completedTask === "false"){
            return task.completed === false
        }
    }).map((task)=>{
        return task
    })
    res.send(arr)
})

// Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

app.post("/new-task", (req, res) => {          
    const userId = req.body.userId
    const id = req.body.id
    const title = req.body.title
    const completed = req.body.completed

    const body = [{
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }]

    const newArr: ToDo[] = body

    const arrComb = [...body, ...arrTasks]

    console.log(userId, id, title, completed)

    res.send(arrComb)
})


// Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.


app.put("/task/completed", (req, res) => {          

})

// Construa um endpoint que deleta um determinado afazer de acordo com sua id.

app.delete("/task/completed", (req, res) => {          

})

// Construa um endpoint que retorne todos os afazeres de uma determinada id de usuário.

app.get('/task/user', (req, res) => {

})

