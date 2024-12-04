import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@mantine/core';
import { useAuth } from '@/hooks';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Container size={460} my={30}>
      <p>{user?.id}</p>

      <Link to="/profile">Minha conta</Link>

      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
