import {
  NewPatient,
  Gender,
  Entry,
  Diagnose,
  HealthCheckRating,
} from "./types";

const isString = (name: any): name is string => {
  return typeof name === "string" || name instanceof String;
};

const isDiagnoses = (
  diagnoses: Array<any>
): diagnoses is Array<Diagnose["code"]> => {
  const notString = diagnoses.find((d: any) => isString(d));

  return !!notString;
};

const isDate = (date: string): Boolean => {
  return !!Date.parse(date);
};

const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender);
};

const isHealthRating = (rating: any): rating is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(rating);
};

const parseString = (str: any): string => {
  if (!str || !isString(str)) {
    throw new Error("Type is not string");
  }

  return str;
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

const parseEntries = (entries: any): Entry[] => {
  if (!entries || !Array.isArray(entries)) {
    throw new Error("Entries is not an array");
  }

  return entries;
};

const parseOccupation = (occupation: any): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error("Invalid occupation");
  }

  return occupation;
};

const parseDiagnoses = (diagnoses: any): Array<Diagnose["code"]> => {
  if (!diagnoses || !Array.isArray(diagnoses) || !isDiagnoses(diagnoses)) {
    throw new Error("Problem with diagnoses");
  }

  return diagnoses;
};

const parseHealthCheckRating = (rating: any): HealthCheckRating => {
  if (!rating || !isHealthRating(rating)) {
    throw new Error("Rating is not a health check rating");
  }

  return rating;
};

const parseDischarge = (obj: any): { date: string; criteria: string } => {
  if (
    !obj.date ||
    !obj.criteria ||
    !isString(obj.date) ||
    isString(obj.criteria)
  ) {
    throw new Error("Invalid date or criteria values");
  }

  return {
    date: parseString(obj.date),
    criteria: parseString(obj.criteria),
  };
};
const parseSickLeave = (obj: any): { startDate: string; endDate: string } => {
  if (
    !obj.startDate ||
    !obj.endDate ||
    !isString(obj.startDate) ||
    !isString(obj.endDate) ||
    !isDate(obj.startDate) ||
    !isDate(obj.endDate)
  ) {
    throw new Error("Invalid date or criteria values");
  }

  return {
    startDate: parseString(obj.startDate),
    endDate: parseString(obj.endDate),
  };
};

const toNewPatient = (patient: any): NewPatient => ({
  name: parseString(patient.name),
  dateOfBirth: parseDate(patient.dateOfBirth),
  gender: parseGender(patient.gender),
  ssn: parseSSN(patient.ssn),
  occupation: parseOccupation(patient.occupation),
  entries: parseEntries(patient.entries),
});

const toNewEntry = (entry: any): Entry | Error => {
  switch (entry.type) {
    case "HealthCheck":
      return {
        ...entry,
        date: parseDate(entry.date),
        description: parseString(entry.description),
        specialist: parseString(entry.specialist),
        diagnosisCodes: entry.diagnosisCodes
          ? parseDiagnoses(entry.diagnosisCodes)
          : undefined,
        healthCheckRating: parseHealthCheckRating(entry.healthCheckRating),
      };

    case "Hospital":
      return {
        ...entry,
        date: parseDate(entry.date),
        description: parseString(entry.description),
        specialist: parseString(entry.specialist),
        diagnosisCodes: entry.diagnosisCodes
          ? parseDiagnoses(entry.diagnosisCodes)
          : undefined,
        discharge: parseDischarge(entry.discharge),
      };

    case "OccupationalHealthcare":
      return {
        ...entry,
        date: parseDate(entry.date),
        description: parseString(entry.description),
        specialist: parseString(entry.specialist),
        diagnosisCodes: entry.diagnosisCodes
          ? parseDiagnoses(entry.diagnosisCodes)
          : undefined,
        employerName: parseString(entry.employerName),
        sickLeave: entry.sickLeave
          ? parseSickLeave(entry.sickLeave)
          : undefined,
      };
    default:
      throw new Error("Type does not exist");
  }
};

export default {
  toNewPatient,
  toNewEntry,
};
