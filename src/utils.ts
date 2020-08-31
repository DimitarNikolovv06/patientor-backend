import { NewPatient, Gender } from "./types";

const isString = (name: any): name is string => {
  return typeof name === "string" || name instanceof String;
};

const isDate = (date: string): Boolean => {
  return !!Date.parse(date);
};

const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error("Type is not string");
  }

  return name;
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date");
  }

  return date;
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Inexisting gender");
  }

  return gender;
};

const parseSSN = (ssn: any): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Invalid ssn");
  }

  return ssn;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Invalid occupation");
  }

  return occupation;
};

const toNewPatient = (patient: any): NewPatient => ({
  name: parseName(patient.name),
  dateOfBirth: parseDate(patient.dateOfBirth),
  gender: parseGender(patient.gender),
  ssn: parseSSN(patient.ssn),
  occupation: parseOccupation(patient.occupation),
});

export default {
  toNewPatient,
};
