import express from "express";
import type { Application , Request , Response } from "express";
import { UserData } from "./data/userData.ts";

const app: Application = express();

app.get("/",(req: Request, res: Response )=>{
    res.send("Hello from my Express Apllication")
})

app.get("/user", (req: Request, res: Response) => {
    res.send(UserData)
})

app.get("/products" , (req: Request, res: Response) => {
    res.send("Get All Products,")
})


export default app;




