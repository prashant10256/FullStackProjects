import express from "express"
import { employerGetAllapplications, jobSeekerDeleteApplication, jobseekerGetAllapplications, postApplication } from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
 
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllapplications);
router.get("/employer/getall", isAuthenticated, employerGetAllapplications);
router.delete("/delete/:id", isAuthenticated, jobSeekerDeleteApplication);
router.post("/post", isAuthenticated, postApplication);





export default router;