export interface IValue {
  name_surname: string;
  linkedin_profile: string;
  email: string;
  phone_number: string;
  question: string;
}

export interface IValueCareerForm extends IValue {
  files: File[];
}