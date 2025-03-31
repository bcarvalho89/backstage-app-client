import { useContext } from 'react';
import { Role } from '@/apollo/types/User';
import { AuthContext } from '@/contexts/AuthContext';

export const useHasPermission = (role: Role) => {
  const context = useContext(AuthContext);
  const currentUser = context?.user;

  if (!currentUser) {
    throw new Error('no user logged');
  }

  return currentUser.role === role;
};
