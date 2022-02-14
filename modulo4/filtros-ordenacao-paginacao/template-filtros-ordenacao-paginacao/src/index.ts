import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getQueryUsers } from "./endpoints/getQueryUsers";

app.get("/users", getAllUsers)
app.get("/users/name", getQueryUsers)