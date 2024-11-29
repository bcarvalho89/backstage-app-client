import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Title } from '@mantine/core';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Container size={460} my={30}>
      <Title ta="center" mb={30}>
        Dashboard
      </Title>

      <Button onClick={handleLogout}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
