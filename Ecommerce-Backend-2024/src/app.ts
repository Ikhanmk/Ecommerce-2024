import express from "express"
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";

//import routes
import userRoute from "./routes/userRoutes.js"
import productRoute from "./routes/productRoutes.js"


connectDB("mongodb://localhost:27017/");
export const myCache = new NodeCache();

const port = 4000;

const app = express();
app.use(express.json());

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.use("/uploads", express.static("uploads"))
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
})