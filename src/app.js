import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import heartRateRoutes from "./routes/heartRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/heart-rates", heartRateRoutes);

app.use((err,  res, ) => {
  console.err(err.stack);
  res.status(500).json({
    error: "Something went wrong...!",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
