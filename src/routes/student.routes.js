import { Router } from "express";
const router = Router();
import { userAuth } from "../middlewares/userAuth.middleware.js";
import { isStudentAuth } from "../middlewares/isStudentAuth.middleware.js";
import { isBlocked } from "../middlewares/isBlockedAuth.middleware.js"
import { requestLOR, getAllLorsOfLoggedInUser } from "../controllers/student.controller.js";



router.route("/requestLOR").post(userAuth, isStudentAuth, isBlocked, requestLOR);
router.route("/getAllLorsOfLoggedInUser").get(userAuth, isStudentAuth, getAllLorsOfLoggedInUser);





export default router;