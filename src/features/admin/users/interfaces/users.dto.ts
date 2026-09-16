import type { UserStatus } from "../../../../shared/types/users.enums";

export interface IUserPublic {  
  id: number;  
  email: string;
  fullName: string;
  status: UserStatus;
}