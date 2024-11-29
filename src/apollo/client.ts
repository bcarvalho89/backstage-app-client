import { ApolloClient, InMemoryCache } from '@apollo/client';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

export default client;
