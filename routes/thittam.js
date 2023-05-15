import { Router } from "express";
import headRouter from "./head";
const thittamRouter = Router();
thittamRouter.use('/head', headRouter);
thittamRouter.post("/", createLine);
thittamRouter.get("/", getAllLine);
// thittamRouter.get("/:id", getLineById);
// thittamRouter.put("/", updateLine);
thittamRouter.delete("/", deleteLine);
// thittamRouter.patch("/:id", updateLineById);

export default thittamRouter;
