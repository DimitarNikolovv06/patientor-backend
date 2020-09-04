import express from "express";
import patientsService from "../services/patientsService";

const router = express.Router();

router.get("/", (_req, res) => {
  // const data = patientsService.getNonSensitiveDataPatients();
  const data = patientsService.getPatientsData();
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
    entries: [],
  });

  try {
    res.json(data);
  } catch (error) {
    res.status(400).end();
  }
});

router.get("/:id", (req, res) => {
  try {
    const data = patientsService.getSinglePatient(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(404).send("Not Found");
  }
});

router.post("/:id/entries", (req, res) => {
  try {
    const data = patientsService.postPatientEntry(req.params.id, req.body);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(404).send(e.message);
  }
});

export default router;
