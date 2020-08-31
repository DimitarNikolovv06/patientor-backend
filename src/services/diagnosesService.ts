import diagnosesData from "../../data/diagnoses.json";
import { Diagnose } from "../types";

const diagnoses: Diagnose[] = diagnosesData;

const getDiagnosesData = (): Diagnose[] => diagnoses;

export default {
  getDiagnosesData,
};
