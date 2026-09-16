import type { Role } from "../../../shared/types/users.enums";

export interface UserLogin {
  email: string;  
  password: string;  
}

export interface UserPublic {
  email: string;
  fullName: string;
  role: Role;  
}

export interface TokenResponse {
  access_token: string;  
  token_type: 'bearer';
}