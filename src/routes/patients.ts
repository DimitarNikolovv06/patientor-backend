import express from "express";
import patientsService from "../services/patientsService";

const router = express.Router();

router.get("/", (_req, res) => {
  const data = patientsService.getNonSensitiveDataPatients();
  res.json(data);
});

router.post("/", (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const data = patientsService.addNewPatient({
    name,
    dateOfBirth,
    gender,
    occupation,
    ssn,
  });

  try {
    res.json(data);
  } catch (error) {
    res.status(400).end();
  }
});

export default router;
