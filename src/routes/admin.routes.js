import { Router } from "express";
const router = Router();
import { userAuth } from "../middlewares/userAuth.middleware.js";
import { isAdminAuth } from "../middlewares/isAdminAuth.middleware.js";
import { registerAsAdmin, updateLORrequest, approveLORrequest, rejectLORrequest, getAllPendingLOR, getAllApprovedLOR, getAllRejectedLOR, findLorsByExamRollNumber, findUserByExamRollNumber, updateUserProfileByExamRollNumber } from "../controllers/admin.controller.js";


// router.route("/registerAsAdmin").post(userAuth, isAdminAuth, registerAsAdmin); // We have To modify this in later- Set that Only admin can entroll other Admin

router.route("/allPendingLOR").get(userAuth, isAdminAuth, getAllPendingLOR);
router.route("/allApprovedLOR").get(userAuth, isAdminAuth, getAllApprovedLOR);
router.route("/allRejectedLOR").get(userAuth, isAdminAuth, getAllRejectedLOR);

router.route("/:lorId/updateLORrequest").put(userAuth, isAdminAuth, updateLORrequest);
router.route("/:lorId/approveLORrequest").post(userAuth, isAdminAuth, approveLORrequest);
router.route("/:lorId/rejectLORrequest").post(userAuth, isAdminAuth, rejectLORrequest);

router.route("/:examRollNumber/findLorsByExamRollNumber").get(userAuth, isAdminAuth, findLorsByExamRollNumber);
router.route("/:examRollNumber/findUserByExamRollNumber").get(userAuth, isAdminAuth, findUserByExamRollNumber);
router.route("/:examRollNumber/updateUserProfileByExamRollNumber").put(userAuth, isAdminAuth, updateUserProfileByExamRollNumber);


export default router;