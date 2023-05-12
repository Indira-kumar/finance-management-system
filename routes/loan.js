import { Router } from "express";

const loanRouter = Router();

loanRouter.post("/");
loanRouter.get("/");
loanRouter.get("/:loanNumber");
loanRouter.put("/", );
loanRouter.delete("/:loanNumber");
loanRouter.patch("/:loanNumber");


export default loanRouter;