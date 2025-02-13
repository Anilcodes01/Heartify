import express from "express";
import { userController } from "../controllers/userControllers.js";
import {validateUser} from "../middleware/validation.js";

const router = express.Router();

router.post('/register', validateUser, (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

export default router;