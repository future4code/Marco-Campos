import { app } from "./app";
import UserController from "./controller/UserController";
import { CreatePost } from "./endpoints/CreatePost";
import { Login } from "./endpoints/Login";
import { SearchPostById } from "./endpoints/SearchPostById";
import { SignUp } from "./endpoints/SignUp";


const userController = new UserController()

app.post("/users/signup", userController.SignUp)

app.post("/users/login", userController.Login)


// app.post("/users/signup", SignUp)
// app.post("/users/login", Login)

// app.post("/posts/create", CreatePost)
// app.get("/posts/:id", SearchPostById)
