import { Router } from "express";
import {createTotalCollection, getTotalCollections,getTotalCollectionsByDateRange, updateTotalCollection, deleteTotalCollection} from "../controllers/totalCollectionController.js";
const totalCollectionRouter = Router();

totalCollectionRouter.post("/", createTotalCollection);
totalCollectionRouter.get("/", getTotalCollections);
totalCollectionRouter.get("/daterange", getTotalCollectionsByDateRange);
totalCollectionRouter.put("/", updateTotalCollection);
totalCollectionRouter.delete("/:date", deleteTotalCollection);

export default totalCollectionRouter;