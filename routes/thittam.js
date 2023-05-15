import { Router } from "express";
import headRouter from "./head.js";
const thittamRouter = Router();

thittamRouter.use('/head', headRouter);
// thittamRouter.post("/");
// thittamRouter.get("/");
// // thittamRouter.get("/:id", getLineById);
// // thittamRouter.put("/", updateLine);
// thittamRouter.delete("/");
// thittamRouter.patch("/:id", updateLineById);

export default thittamRouter;
