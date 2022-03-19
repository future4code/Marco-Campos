import { app } from "./app"
import { signUp } from "./endpoints/signUp"
import { testConnection } from "./endpoints/test"


app.get("/test", testConnection )

app.post("/signup", signUp )
