import express from "express";
import heartRateController from "../controllers/HeartController.js";

const router = express.Router();

router.post("/", heartRateController.recordHeartRate);
router.get("/patient/:patientId", heartRateController.getPatientHeartRates);

export default router;
