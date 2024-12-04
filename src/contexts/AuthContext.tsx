import { createContext } from 'react';
import { ApolloError } from '@apollo/client';
import { User } from '@/apollo/types/User';

export interface AuthProviderValue {
  user: User | null;
  loading: boolean;
  error?: ApolloError;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthProviderValue | undefined>(undefined);
