import express from "express";
import type { Application , Request , Response } from "express";
import { UserData } from "./data/userData.ts";
import { error } from "node:console";
import pool from "./config/db.ts";

const app: Application = express();
app.use(express.json());

app.get("/",(req: Request, res: Response )=>{
    res.send("Hello from my Express Apllication")
})

app.get("/teacher" ,async ( req: Request, res: Response ) => {
    const query =  "SELECT * from teacher"
    const result = await pool.query(query);
    res.status(200).json(result.rows)
})

app.get("/teacher/:id" , async ( req: Request, res: Response ) => {
    const { id  } = req.params;
    const query = ` SELECT * from teacher where id = $1  `
    const result = await pool.query(query, [id])
    res.status(200).json(result.rows);
})

app.get("/user", (req: Request, res: Response) =>{
    res.status(200).json(UserData);
})

app.post("/user",(req: Request, res: Response)=> {
    const { name , age , role } = req.body || {};

    if(!name || !age || !role ) {
        res.status(400).json({error : " Invalid request"})
    }
    const newUser  = {
        id: UserData.length + 1,
        name,
        age, 
        role
    }
    UserData.push(newUser);
    res.status(201).json(newUser);
})
export default app;




