export interface EmployeeRegistrationInput {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  startDate: string;
}

export interface Employee extends EmployeeRegistrationInput {
  id: number;
}