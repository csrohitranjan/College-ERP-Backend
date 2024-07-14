import { Router } from "express";
const router = Router();
import { userAuth } from "../middlewares/userAuth.middleware.js";
import { isHodAuth } from "../middlewares/isHodAuth.middleware.js";
import { updateLORrequest, approveLORrequest, rejectLORrequest, allPendingLORsOfDept, allApprovedLORsOfDept, allRejectedLORsOfDept } from "../controllers/hod.controller.js";



router.route("/allPendingLORsOfDept").get(userAuth, isHodAuth, allPendingLORsOfDept);
router.route("/allPendingLORsOfDept").get(userAuth, isHodAuth, allApprovedLORsOfDept);
router.route("/allPendingLORsOfDept").get(userAuth, isHodAuth, allRejectedLORsOfDept);

router.route("/:lorId/updateLORrequest").put(userAuth, isHodAuth, updateLORrequest);
router.route("/:lorId/approveLORrequest").post(userAuth, isHodAuth, approveLORrequest);
router.route("/:lorId/rejectLORrequest").post(userAuth, isHodAuth, rejectLORrequest);




export default router;