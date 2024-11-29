import '@mantine/core/styles.css';

import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { MantineProvider } from '@mantine/core';
import client from './apollo/client';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp && decoded.exp < currentTime) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </ApolloProvider>
  );
}
