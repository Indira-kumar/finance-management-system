import { Router } from "express";
import { createThittam } from "../controllers/thittamController.js";
import headRouter from "./head.js";
const thittamRouter = Router();

thittamRouter.use('/head', headRouter);
thittamRouter.post("/", createThittam);
thittamRouter.get("/");
thittamRouter.put("/",);
thittamRouter.delete("/");

export default thittamRouter;
