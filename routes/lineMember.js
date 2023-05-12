import { Router } from "express";

const lineMemberRouter = Router();

lineMemberRouter.post("/");
lineMemberRouter.get("/");
lineMemberRouter.get("/:email");
lineMemberRouter.put("/", );
lineMemberRouter.delete("/:email");
lineMemberRouter.patch("/:email");


export default lineMemberRouter;