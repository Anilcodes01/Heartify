import express from "express";
import { patientController } from "../controllers/patientController";
import validatePatient from "../middleware/validation";

const router = express.Router();

router.post("/", validatePatient, patientController.addPatient);
router.get("/:id", patientController.getPatient);
router.get("/", patientController.getAllPatients);

export default router;