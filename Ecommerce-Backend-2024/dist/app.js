import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
//import routes
import userRoute from "./routes/userRoutes.js";
import productRoute from "./routes/productRoutes.js";
import orderRoute from "./routes/orderRoutes.js";
config({ path: "src/.env" });
const port = process.env.PORT || 4000;
connectDB(process.env.MONGO_URI || "");
export const myCache = new NodeCache();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.send("API is working");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is working on http://localhost:${port}`);
});
