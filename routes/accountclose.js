import { Router } from "express";
import {createAccountClose, getLastEntries, updateAccountClose, deleteAccountClose} from "../controllers/accountCloseController.js"
const acountCloseRouter = Router();

acountCloseRouter.post("/",createAccountClose);
acountCloseRouter.get("/", getLastEntries);
acountCloseRouter.put("/", updateAccountClose);
acountCloseRouter.delete("/", deleteAccountClose);



export default acountCloseRouter;