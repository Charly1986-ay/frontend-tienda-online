import type { Role, UserStatus } from '../../types/users.types';

interface IUserBase {
  email: string;
  fullName: string;  
  role: Role; 
}

export interface IUserCreate extends IUserBase {
  password: string;
}

export interface IUserUpdate {
  email?: string;
  fullName?: string;
  password?: string;
}

export interface IUserResponse extends IUserBase {
  id: number;  
  status: UserStatus;
}