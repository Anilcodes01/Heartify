import mongoose from "mongoose";

const heartRateSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    recordedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const HeartRate = mongoose.model("HeartRate", heartRateSchema);

export default HeartRate;
