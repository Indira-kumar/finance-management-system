import { Router } from "express";

const dailyCollectionRouter = Router();

dailyCollectionRouter.post("/");
dailyCollectionRouter.get("/");
dailyCollectionRouter.get("/:isbn");
dailyCollectionRouter.put("/", );
dailyCollectionRouter.delete("/:isbn");
dailyCollectionRouter.patch("/:isbn");


export default dailyCollectionRouter;