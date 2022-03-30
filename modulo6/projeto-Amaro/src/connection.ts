import Knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"

dotenv.config()

export const connection = Knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())