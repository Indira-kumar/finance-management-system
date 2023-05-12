import { Router } from "express";

const lineMemberRouter = Router();

lineMemberRouter.post("/");
lineMemberRouter.get("/");
lineMemberRouter.get("/:id");
lineMemberRouter.put("/", );
lineMemberRouter.delete("/:id");
lineMemberRouter.patch("/:id");


export default lineMemberRouter;