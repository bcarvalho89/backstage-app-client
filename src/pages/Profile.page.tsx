import React from 'react';
import { Avatar, Button, Flex, Grid, Group, Text, TextInput, Title } from '@mantine/core';
import Card from '@/components/Card/Card';
import { useAuth } from '@/hooks';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Title mb="lg">Minha conta</Title>

      <Card headerImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80">
        <Group wrap="nowrap" align="flex-end" mt={-120}>
          <Avatar src={user?.avatar} size={200} radius={200} />

          <Text fz="h1" fw={500}>
            {user?.name}
          </Text>
        </Group>

        <Flex mt={60} direction="column">
          <Title fz="h3">Meus Dados</Title>

          <Grid mt="lg">
            <Grid.Col span={{ base: 6 }}>
              <TextInput label="Nome" value={user?.name} />
            </Grid.Col>
            <Grid.Col span={{ base: 6 }}>
              <TextInput label="E-mail" value={user?.email} />
            </Grid.Col>
          </Grid>
        </Flex>

        <Group mt="lg">
          <Button type="submit">Atualizar informações</Button>
        </Group>
      </Card>
    </>
  );
};

export default Profile;
