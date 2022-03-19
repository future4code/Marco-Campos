import { Request, Response } from "express";


export const testConnection = async (req: Request, res: Response): Promise<void> => {
    try{
        res.status(200).send("sucesso!")
    }catch(error){
        res.status(400).send("Erro!")
    }

}