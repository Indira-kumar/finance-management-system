import { Router } from "express";
import {createTotalCollection, getTotalCollections, getTotalCollectionByDate, updateTotalCollection, deleteTotalCollection} from "../controllers/totalCollectionController.js";
const totalCollectionRouter = Router();

totalCollectionRouter.post("/", createTotalCollection);
totalCollectionRouter.get("/", getTotalCollections);
totalCollectionRouter.get("/:date", getTotalCollectionByDate);
totalCollectionRouter.put("/", updateTotalCollection);
totalCollectionRouter.delete("/:date", deleteTotalCollection);
// totalCollectionRouter.patch("/:date", updateTotalCollection);


export default totalCollectionRouter;