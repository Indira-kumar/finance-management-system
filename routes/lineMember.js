import { Router } from "express";
import {createLineMember, getAllLineMember, getLineMemberByEmail, updateLineMember, updateLineMemberByEmail,deleteLineMemberByEmail} from "../controllers/lineMemberController.js"
const lineMemberRouter = Router();

lineMemberRouter.post("/", createLineMember);
lineMemberRouter.get("/", getAllLineMember);
lineMemberRouter.get("/:email", getLineMemberByEmail);
lineMemberRouter.put("/", updateLineMember);
lineMemberRouter.delete("/:email", deleteLineMemberByEmail);
lineMemberRouter.patch("/:email", updateLineMemberByEmail);


export default lineMemberRouter;