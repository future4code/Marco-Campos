import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {Request, Response} from "express";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());
//-----------------------------------------------------------------------
let errorCode = 400
app.post("/user", async (req: Request, res: Response): Promise<void>=>{
  try{ 
    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email

    if(!name || !nickname || !email){
      throw new Error("some information is missing in the body")
    }
    await connection.raw(`
  INSERT INTO Users
  (id, name, nickname, email)
  VALUES (
  "${Date.now().toString()}",
  "${name}",
  "${nickname}",
  "${email}"
  );
  `)
     res.status(201).send("user created successfully");
  }catch(error: any){
    res.status(errorCode).send(error.message);
  }
});

//---------------------------------------------------------------------

app.get("/user/:id", async (req: Request, res: Response): Promise<void>=>{
  try{ 
     const id: any = req.params.id

    const result = await connection.raw(`
    SELECT * FROM Users WHERE id="${id}" ;
    `)

    if(result[0].length <= 0){
      throw new Error("wrong or missing path")
    }

    res.status(200).send(result[0]);
  }catch(error: any){
    res.status(errorCode).send(error.message);
  }
});

//---------------------------------------------------------------------

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void>=>{
  try{ 
    const id: any = req.params.id
    const name = req.body.name
    const nickname = req.body.nickname

    if(!name || !nickname){
      throw new Error("some information is missing in the body")
    }

    const result = await connection.raw(`
    UPDATE Users
    SET name = "${name}", nickname = "${nickname}"
    WHERE id = "${id}";
    `)

    res.status(200).send("user modified successfully");
  }catch(error: any){
    res.status(errorCode).send(error.message);
  }
});

//---------------------------------------------------------------------

app.post("/task", async (req: Request, res: Response): Promise<void>=>{
  try{ 
    const title = req.body.title
    const description = req.body.description
    const limitDate = req.body.limitDate
    const status = req.body.status
    const creatorUserId = req.body.creatorUserId

    if(!title || !description || !limitDate || !status || !creatorUserId){
      throw new Error("some information is missing in the body")
    }
    const date = limitDate.split('/', 3)
    const dia = date[2]
    const mes = date[1]
    const ano = date[0]
    await connection.raw(`
  INSERT INTO to_do_list
  VALUES (
  "${Date.now().toString()}",
  "${title}",
  "${description}",
  "${ano}/${mes}/${dia}",
  "${status}",
  "${creatorUserId}"
  );
  `)
     res.status(201).send("task created successfully");
  }catch(error: any){
    res.status(errorCode).send(error.message);
  }
});

//---------------------------------------------------------------------
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app





