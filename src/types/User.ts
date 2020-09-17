export interface User {
  id: number;
  name: string;
  email: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}
