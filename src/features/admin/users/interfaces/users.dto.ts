import type { UserStatus } from "@/shared/types/users.type";

export interface IUserPublic {  
  id: number;  
  email: string;
  fullName: string;
  status: UserStatus;
}