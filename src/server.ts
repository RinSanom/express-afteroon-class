import app from "./app.ts";
import pool from "./config/db.ts";

const PORT = 3000;

pool.connect()
    .then(() => {
        console.log("Datatabase Connected!")
    })
    .catch((error) => {
        console.log("Datatabase Connection Error" , error)
    })
    
app.listen(PORT, ()=> {
    console.log(`App Is Running On host: http://localhost:${PORT}`)
})