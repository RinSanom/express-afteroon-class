import app from "./app.ts";

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`App Is Running On host: http://localhost:${PORT}`)
})