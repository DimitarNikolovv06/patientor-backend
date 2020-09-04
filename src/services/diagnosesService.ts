import diagnosesData from "../../data/diagnoses";
import { Diagnose } from "../types";

const diagnoses: Diagnose[] = diagnosesData;

const getDiagnosesData = (): Diagnose[] => diagnoses;

export default {
  getDiagnosesData,
};
