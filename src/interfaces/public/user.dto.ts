import type { UserStatus } from '../../types/users.types';

export interface IUserPublic {  
  id: number;  
  email: string;
  fullName: string;
  status: UserStatus;
}