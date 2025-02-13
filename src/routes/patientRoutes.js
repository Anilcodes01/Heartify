import express from "express";
import { patientController } from "../controllers/patientController.js";
import  {validatePatient}  from "../middleware/validation.js";

const router = express.Router();

router.post('/', validatePatient, (req, res) => patientController.addPatient(req, res));
router.get('/:id', (req, res) => patientController.getPatient(req, res));
router.get('/', (req, res) => patientController.getAllPatients(req, res));

export default router;
