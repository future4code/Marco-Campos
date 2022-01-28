import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.listen( 3003, () => {
    console.log("o servidor esta disponivel na porta 3003")
})

app.get("/test", (req:Request, res:Response) =>{
    res.send("ok").status(200)
    console.log("ok")
})

