import { Router } from "express";
import {createLineMember, getAllLineMember, getLineMemberByPhoneNum, updateLineMemberByPhoneNum,deleteLineMemberByEmail} from "../controllers/lineMemberController.js"
const lineMemberRouter = Router();

lineMemberRouter.post("/", createLineMember);
lineMemberRouter.get("/", getAllLineMember);
lineMemberRouter.get("/phone", getLineMemberByPhoneNum);
lineMemberRouter.put("/", updateLineMemberByPhoneNum);
lineMemberRouter.delete("/", deleteLineMemberByEmail);


export default lineMemberRouter;