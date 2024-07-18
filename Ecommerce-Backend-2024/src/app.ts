import express from "express"
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

//import routes
import userRoute from "./routes/userRoutes.js"


connectDB("mongodb://localhost:27017/");

const port = 4000;

const app = express();
app.use(express.json());

// Using Routes
app.use("/api/v1/user", userRoute);

app.use(errorMiddleware);

app.listen(port, ()=> {
    console.log(`Server is working on http://localhost:${port}`);
})