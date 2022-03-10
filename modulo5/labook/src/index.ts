import { app } from "./app";
import { CreatePost } from "./endpoints/CreatePost";
import { Login } from "./endpoints/Login";
import { SearchPostById } from "./endpoints/SearchPostById";
import { SignUp } from "./endpoints/SignUp";



app.post("/users/signup", SignUp)
app.post("/users/login", Login)

app.post("/posts/create", CreatePost)
app.get("/posts/:id", SearchPostById)

