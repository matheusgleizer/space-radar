import express from "express";
import getRockets from "../controllers/getRockets.js";
import getMissions from "../controllers/getMissions.js";
import spaceXMiddleware from "../middleware/spaceX.middleware.js";

var router = express.Router();

router.post("/getMissions", spaceXMiddleware, getMissions);

router.post("/getRockets",  spaceXMiddleware, getRockets);

export default router;
