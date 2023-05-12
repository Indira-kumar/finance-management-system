import { Router } from "express";

const lineRouter = Router();
lineRouter.post("/", createLine);
lineRouter.get("/", getAllLine);
lineRouter.get("/:id", getLineById);
lineRouter.put("/", updateLine);
lineRouter.delete("/:id", deleteLineById);
lineRouter.patch("/:id", updateLineById);

export default lineRouter;
