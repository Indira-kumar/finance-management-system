import { Router } from "express";
import {createHead, updateHead, deleteHead, getAllHead} from "../controllers/headController.js"
const headRouter = Router();

headRouter.post("/", createHead);
headRouter.get("/", getAllHead);
headRouter.put("/", updateHead);
headRouter.delete("/", deleteHead);

export default headRouter;
