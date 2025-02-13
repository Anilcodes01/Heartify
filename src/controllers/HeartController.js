import { HeartRate } from "../models/HeartRate.js";
import { Patient } from "../models/Patient.js";
import { User } from "../models/User.js";

export const heartRateController = {
  async recordHeartRate(req, res) {
    try {
      const { patientId, rate, userId, notes } = req.body;
      const patientExists = await Patient.findById(patientId);
      const userExists = await User.findById(userId);

      if (!patientExists) {
        return res.status(400).json({ error: "Invalid patient ID" });
      }

      if (!userExists) {
        return res.status(400).json({ error: "Invalid user ID" });
      }

      const heartRate = new HeartRate({
        patient: patientId,
        rate,
        recordedBy: userId,
        notes,
      });

      await heartRate.save();
      res.status(200).json({
        message: "Heart rate recorded successfully...!",
        heartRate,
      });
    } catch (error) {
      res.status(500).json({
        error: "Failed to record heart rate...!",
      });
    }
  },

  async getPatientHeartRates(req, res) {
    try {
      const heartRates = await HeartRate.find({ patient: req.params.patientId })
        .populate("patient", "name")
        .populate("recordedBy", "name")
        .sort({ timeStamp: -1 });

      res.json(heartRates);
    } catch (error) {
      res.status(500).json({
        error: "Failed to get heart rate...!",
      });
    }
  },
};
