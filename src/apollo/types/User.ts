export enum Role {
  ADMIN = 'ADMIN',
  CONTRIBUTOR = 'CONTRIBUTOR',
  GUEST = 'GUEST',
}

export interface User {
  avatar: string;
  email: string;
  id: string;
  name: string;
  username: string;
  role: Role;
}
