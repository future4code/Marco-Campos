import express, { Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createUser } from "./endpoints/createUsers"

dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log("server is running at port", process.env.PORT || 3003)
})

app.post("/users", createUser)
