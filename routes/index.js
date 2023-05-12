import { Router } from "express";
import dailyCollectionRouter from "./dailyCollection.js";
import lineMemberRouter from "./lineMember.js";
import lineRouter from "./line.js";
import loanRouter from "./loan.js";
import totalCollectionRouter from "./totalCollection.js";
const router = Router();

router.use("/dailycollection", dailyCollectionRouter)
router.use("/line", lineRouter )
router.use("/linemember", lineMemberRouter)
router.use("/loan", loanRouter )
router.use("/totalcollection", totalCollectionRouter )

export default router;