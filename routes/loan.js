import { Router } from "express";
import {createLoan, getLoan, getLoans, updateLoan, deleteLoan } from "../controllers/loanController.js";
const loanRouter = Router();

loanRouter.post("/", createLoan);
loanRouter.get("/", getLoans);
loanRouter.get("/:loanNumber", getLoan);
loanRouter.put("/", updateLoan);
loanRouter.delete("/:loanNumber", deleteLoan);
loanRouter.patch("/:loanNumber", updateLoan);


export default loanRouter;