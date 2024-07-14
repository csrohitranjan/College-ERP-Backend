import { Router } from "express";
const router = Router();
import { userAuth } from "../middlewares/userAuth.middleware.js";
import { registerUser, loginUser, forgetPassword, updateProfile, changePassword, getCurrentUser, logout } from "../controllers/user.controller.js";



// ######################   GENERAL ROUTES ############################

router.route("/registerUser").post(registerUser); // Later on We set this that only Admin can Register User
router.route("/loginUser").post(loginUser);
router.route("/forgetPassword").post(forgetPassword);


//  ##################### GENERAL SECURED ROUTES  #################

router.route("/updateProfile").put(userAuth, updateProfile);
router.route("/changePassword").put(userAuth, changePassword);
router.route("/getCurrentUser").get(userAuth, getCurrentUser)
router.route("/logout").post(userAuth, logout);










export default router;