import '@mantine/core/styles.css';
import './styles.css';

import { ApolloProvider } from '@apollo/client';
import { PostHogProvider } from 'posthog-js/react';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import client from './apollo/client';
import AuthProvider from './contexts/AuthProvider';
import Routes from './Routes';
import { theme } from './theme';

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY!} options={options}>
        <MantineProvider theme={theme}>
          <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </BrowserRouter>
        </MantineProvider>
      </PostHogProvider>
    </ApolloProvider>
  );
}
