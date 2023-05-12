import { Router } from "express";

const totalCollectionRouter = Router();

totalCollectionRouter.post("/");
totalCollectionRouter.get("/");
totalCollectionRouter.get("/:date");
totalCollectionRouter.put("/", );
totalCollectionRouter.delete("/:date");
totalCollectionRouter.patch("/:date");


export default totalCollectionRouter;