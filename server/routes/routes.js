import express from "express";
// import getGoogleImage from "../controllers/getGoogleImage.js";
import getRockets from "../controllers/getRockets.js";
import getMissions from "../controllers/getMissions.js";
import cors from "cors";
import spaceXMiddleware from "../middleware/spaceX.middleware.js";
// import pixabyMiddleware from "../middleware/pixaby.middleware.js";
// import getRocketsMiddleware from "../middleware/get-rockets-details.middleware.js";

var router = express.Router();

router.post("/getMissions", spaceXMiddleware, getMissions);

router.post("/getRockets", cors(), spaceXMiddleware, getRockets);

export default router;
