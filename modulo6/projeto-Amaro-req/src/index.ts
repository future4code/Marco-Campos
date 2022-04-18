import { app } from "./app";
import { productController } from "./controller/productController";
import { CreateProduct } from "./endpoints/createProduct";
import { getAllProducts } from "./endpoints/getAllProduct";
import { getProductById } from "./endpoints/getProductById";



app.get("/product", getAllProducts)
app.get("/product/id", productController.getProductById)
app.post("/product", productController.createProduct)