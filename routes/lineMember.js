import { Router } from "express";
import {createLineMember, lineMemberLogin, lineMemberLogout,getAllLineMember, getLineMemberByPhoneNum, updateLineMemberByPhoneNum,deleteLineMemberByEmail} from "../controllers/lineMemberController.js"
const lineMemberRouter = Router();

// send request as name not member_name
lineMemberRouter.post("/", createLineMember);
lineMemberRouter.post("/login", lineMemberLogin)
lineMemberRouter.get("/", getAllLineMember);
lineMemberRouter.get("/phone", getLineMemberByPhoneNum);
lineMemberRouter.put("/", updateLineMemberByPhoneNum);
lineMemberRouter.delete("/", deleteLineMemberByEmail);
lineMemberRouter.delete("/logout", lineMemberLogout);


export default lineMemberRouter;