import express from "express";
import cors from "cors";
import { connectDB } from "./config/database";
import userRoutes from "./routes/userRoutes";
import patientRoutes from "./routes/patientRoutes";
import heartRateRoutes from "./routes/heartRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/heart-rates", heartRateRoutes);

app.use((err, req, res, next) => {
  console.err(err.stack);
  res.status(500).json({
    error: "Something went wrong...!",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
