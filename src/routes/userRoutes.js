import express from "express";
import { userController } from "../controllers/userControllers";
import validateUser from "../middleware/validation";

const router = express.Router();

router.post("/register", validateUser, userController.register);
router.post("/login", userController.login);

export default router;