import { Router } from "express";
import {createLoan, getLoansByDateRange,getLoanByLoanNumber,getLoansByCondition, getLoansByLineClosed, updateBalance, getLoansByLineNotClosed, updateLoan, deleteLoan, getLoansByLineAll} from "../controllers/loanController.js";
const loanRouter = Router();

loanRouter.post("/", createLoan);
loanRouter.get("/", getLoansByLineNotClosed);
loanRouter.get("/all", getLoansByLineAll);
loanRouter.get("/closed", getLoansByLineClosed);
loanRouter.get("/condition", getLoansByCondition);
loanRouter.get("/date", getLoansByDateRange);
loanRouter.put("/updatebalance", updateBalance);
loanRouter.put("/", updateLoan);
loanRouter.delete("/", deleteLoan);


export default loanRouter;