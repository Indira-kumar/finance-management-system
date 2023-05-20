import { Router } from "express";
import {register, login, logout, updateUserByPhoneNum} from "../controllers/userController.js"
const userRouter = Router();

userRouter.post("/", register);
userRouter.get("/logout", logout);
userRouter.put("/", updateUserByPhoneNum);
userRouter.delete("/", logout); // have to check which HTTP request for logging out

export default userRouter;