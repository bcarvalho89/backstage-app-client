import { PropsWithChildren, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { User } from '@/apollo/types/User';
import { AuthContext } from './AuthContext';

const GET_USER_DATA = gql`
  query GetUserData {
    currentUser {
      id
      username
    }
  }
`;

const dummyUser: User = {
  id: 'abc123',
  username: 'admin',
  name: 'Bruno Gomes de Carvalho',
  email: 'bruno@brunocarvalho.me',
  avatar: 'https://avatars.githubusercontent.com/u/8310877?v=4&size=200',
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(dummyUser);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {
    error,
    refetch,
    loading: queryLoading,
  } = useQuery(GET_USER_DATA, {
    skip: !localStorage.getItem('token'),
    onCompleted: (data) => {
      // setUser(data?.currentUser || null);
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
      logout();
    },
  });

  const login = async (token: string) => {
    localStorage.setItem('token', token);

    setLoading(true);

    try {
      await refetch();
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    if (!queryLoading) {
      setLoading(false);
    }
  }, [queryLoading]);

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
