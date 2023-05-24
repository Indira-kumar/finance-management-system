import { Router } from "express";
import {createDailyCollection, getAllDailyCollections, getAllDailyCollectionsByconditions, updateDailyCollection, deleteDailyCollection} from "../controllers/dailyAmountCollectionController.js"
const dailyCollectionRouter = Router();

dailyCollectionRouter.post("/", createDailyCollection);
dailyCollectionRouter.get("/", getAllDailyCollections); //wrt date
dailyCollectionRouter.get("/condition", getAllDailyCollectionsByconditions); //wrt conditions in req.body
// dailyCollectionRouter.get("/loan", getAllDailyCollectionsPerLoan);
dailyCollectionRouter.put("/", updateDailyCollection);
dailyCollectionRouter.delete("/", deleteDailyCollection);



export default dailyCollectionRouter;