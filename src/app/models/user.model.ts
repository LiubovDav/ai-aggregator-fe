export interface User {
  userId: number | null;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  createdOn: string | null;
  updatedOn: string | null;
}
