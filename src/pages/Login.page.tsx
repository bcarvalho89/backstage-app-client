import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { IconInfoCircle } from '@tabler/icons-react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Button,
  Container,
  Group,
  Loader,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth } from '@/hooks';

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.trim().length === 0 ? 'Digite um usuário' : null),
      password: (value) => (value.trim().length === 0 ? 'Digite uma senha' : null),
    },
  });

  const handleSubmit = async ({ password, username }: { username: string; password: string }) => {
    try {
      const { data } = await loginMutation({ variables: { username, password } });
      const { token } = data.login;

      try {
        jwtDecode(token);

        await login(token).then(() => {
          navigate('/');
        });
      } catch (error) {
        setErrorMessage('Erro ao realizar o login');
      }
    } catch (error) {
      setErrorMessage('Credenciais inválidas');
    }
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error.graphQLErrors[0].message);
    } else {
      setErrorMessage(null);
    }
  }, [error]);

  return (
    <Container size={490} mt="xl">
      <Title ta="center" mb="xl">
        Login
      </Title>

      <Paper withBorder>
        {errorMessage && (
          <Alert p="sm" mb="sm" color="yellow" icon={<IconInfoCircle />}>
            <Text size="sm" c="yellow">
              {errorMessage}
            </Text>
          </Alert>
        )}

        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack>
            <TextInput
              label="Usuário"
              key={form.key('username')}
              {...form.getInputProps('username')}
            />

            <PasswordInput
              label="Senha"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />
          </Stack>

          <Group mt="lg">
            <Button type="submit" disabled={loading}>
              Entrar
            </Button>
            {loading && <Loader type="dots" />}
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
