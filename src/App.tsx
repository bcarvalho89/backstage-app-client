import '@mantine/core/styles.css';
import './styles.css';

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import client from './apollo/client';
import AuthProvider from './contexts/AuthProvider';
import Routes from './Routes';
import { theme } from './theme';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <MantineProvider theme={theme}>
        <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BrowserRouter>
      </MantineProvider>
    </ApolloProvider>
  );
}
