import express from "express";
import { heartRateController } from "../controllers/HeartController.js";

const router = express.Router();

router.post('/', (req, res) => heartRateController.recordHeartRate(req, res));
router.get('/patient/:patientId', (req, res) => heartRateController.getPatientHeartRates(req, res));

export default router;
