import { useContext } from 'react';
import { AuthContext, AuthProviderValue } from '@/contexts/AuthContext';

export const useAuth = (): AuthProviderValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
