import express from "express";
import diagnosesService from "../services/diagnosesService";

const router = express.Router();

router.get("/", (_req, res) => {
  const data = diagnosesService.getDiagnosesData();

  res.json(data);
});

export default router;
