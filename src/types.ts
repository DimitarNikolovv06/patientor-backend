export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NonSensitiveDataPatient = Omit<Patient, "ssn">;

export type NewPatient = Omit<Patient, "id">;
/* Could have the same functionality with Pick e.g. Pick<Patient,'id' | 'gender' | 'name' | dateOfBirth | occupation> */
