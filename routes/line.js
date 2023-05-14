import { Router } from "express";
import {createLine, getAllLine, getLineById, updateLine, updateLineById, deleteLine} from "../controllers/lineController.js";
const lineRouter = Router();

lineRouter.post("/", createLine);
lineRouter.get("/", getAllLine);
// lineRouter.get("/:id", getLineById);
// lineRouter.put("/", updateLine);
lineRouter.delete("/", deleteLine);
// lineRouter.patch("/:id", updateLineById);

export default lineRouter;
