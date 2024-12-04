import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title } from '@mantine/core';
import { useAuth } from '@/hooks';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container size={460} my={30}>
      <Title ta="center" mb={30}>
        Profile
      </Title>

      <p>{user?.username}</p>

      <Link to="/">Dashboard</Link>
    </Container>
  );
};

export default Profile;
