import HeartRate from "../models/HeartRate";

export const heartRateController = {
  async recordHeartRate(req, res) {
    try {
      const heartRate = new HeartRate({
        patient: req.body.patientId,
        rate: req.body.rate,
        recordedBy: req.body.userId,
        notes: req.body.notes,
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
