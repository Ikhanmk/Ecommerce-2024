import express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/userController.js";
const app = express.Router();
// route - /api/v1/user/new
app.post("/new", newUser);
app.get("/all", getAllUsers);
app.route("/:id").get(getUser).delete(deleteUser);
export default app;
