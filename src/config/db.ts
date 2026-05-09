import { Pool }  from "pg"

const pool = new Pool({
    host : "localhost",
    port : 5433,
    user : "postgres",
    password: "1234",
    database : "school_db_affternoon "
})

export default pool

