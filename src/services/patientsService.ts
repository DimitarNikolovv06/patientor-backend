import patientsData from "../../data/patientsData";
import { NonSensitiveDataPatient, NewPatient, Patient, Entry } from "../types";
import patients from "../../data/patientsData";
import utils from "../utils";

const getNonSensitiveDataPatients = (): NonSensitiveDataPatient[] =>
  patientsData.map(
    ({ id, dateOfBirth, gender, name, occupation, entries }) => ({
      id,
      occupation,
      dateOfBirth,
      name,
      gender,
      entries,
    })
  );

const addNewPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    ...patient,
    id: `i am id ${Math.random() * 100000}`,
  };

  patients.push(newPatient);

  return newPatient;
};

const getPatientsData = (): Patient[] => patientsData;

const getSinglePatient = (id: string): Patient | undefined =>
  patientsData.find((p) => p.id === id);

const postPatientEntry = (
  id: string,
  entry: Omit<Entry, "id">
): Entry | undefined => {
  const patient = patientsData.find((p) => p.id === id);
  const newEntry: Entry = utils.toNewEntry(entry) as Entry;
  newEntry.id = `random id ${Math.random() * 100000}`;

  patient?.entries.push(newEntry);

  return newEntry;
};

export default {
  getNonSensitiveDataPatients,
  addNewPatient,
  getSinglePatient,
  getPatientsData,
  postPatientEntry,
};
