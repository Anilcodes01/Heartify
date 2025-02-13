import {Patient} from "../models/Patient.js";

export const patientController = {
  async addPatient(req, res) {
    try {
      const patient = new Patient(req.body);
      await patient.save();
      res.status(200).json({
        message: "Patient added successfully",
        patient,
      });
    } catch (error) {
      res.status(500).json({
        error: "Failed to add patient...!",
        error: error.message
      });
    }
  },

  async getPatient(req, res) {
    try {
      const patient = await Patient.findById(req.params.id).populate(
        "assignedDoctor",
        "name email"
      );

      if (!patient) {
        return res.status(404).json({
          error: "Patient not found...!",
        });
      }

      res.json(patient);
    } catch (error) {
      res.status(500).json({
        error: "Failed to get patient with this id...!",
      });
    }
  },

  async getAllPatients(req, res) {
    try {
      const patients = await Patient.find().populate(
        "assignedDoctor",
        "name email"
      );

      res.json(patients);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch all patients...!",
      });
    }
  },
};
