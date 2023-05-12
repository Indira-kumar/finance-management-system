import { Router } from "express";
import {createDailyCollection, getAllDailyCollections, getDailyCollectionByLoanNumber, updateDailyCollectionByLoanNumber, deleteDailyCollectionByLoanNumber} from "../controllers/dailyAmountCollectionController.js"
import { get } from "mongoose";
const dailyCollectionRouter = Router();

dailyCollectionRouter.post("/", createDailyCollection);
dailyCollectionRouter.get("/", getAllDailyCollections);
dailyCollectionRouter.get("/:loan_no", getDailyCollectionByLoanNumber);
dailyCollectionRouter.delete("/:loan_no", deleteDailyCollectionByLoanNumber);
dailyCollectionRouter.patch("/:loan_no", updateDailyCollectionByLoanNumber);


export default dailyCollectionRouter;