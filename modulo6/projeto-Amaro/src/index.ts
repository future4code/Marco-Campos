import { app } from "./app";
import { productController } from "./controller/ProductController";
import { CreateProduct } from "./endpoints/createProduct";
import { SearchProductById } from "./endpoints/searchProductById";
import { migrations } from "./migrations";


migrations.migrationTable()

app.get("/product", SearchProductById)
app.post("/product", productController.CreateProduct)
