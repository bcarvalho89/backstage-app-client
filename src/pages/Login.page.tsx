import React, { useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Group,
  Loader,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const Login: React.FC = () => {
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {},
  });

  const handleSubmit = async ({ password, username }: { username: string; password: string }) => {
    try {
      const { data } = await login({ variables: { username, password } });
      const token = data.login.token;

      try {
        jwtDecode(token);
        localStorage.setItem('token', token);
        navigate('/');
      } catch (error) {
        alert('Invalid token received from server');
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Container size={460} my={30}>
      <Title ta="center" mb={30}>
        Login
      </Title>

      <Paper radius="md" p="xl" withBorder>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack>
            <TextInput
              label="User"
              value={form.values.username}
              onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
              radius="md"
            />

            <PasswordInput
              label="Password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              radius="md"
            />
          </Stack>

          <Group mt="xl">
            <Button type="submit" radius="xl" disabled={loading}>
              Login
            </Button>
            {loading && <Loader type="dots" />}
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
