import patientsData from "../../data/patientsData";
import { NonSensitiveDataPatient, NewPatient, Patient } from "../types";

const getNonSensitiveDataPatients = (): NonSensitiveDataPatient[] =>
  patientsData.map(({ id, dateOfBirth, gender, name, occupation }) => ({
    id,
    occupation,
    dateOfBirth,
    name,
    gender,
  }));

const addNewPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    ...patient,
    id: "i am 58ring",
  };

  return newPatient;
};

export default {
  getNonSensitiveDataPatients,
  addNewPatient,
};
