import React from 'react';
import { Title } from '@mantine/core';
import { useAuth } from '@/hooks';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Title>Configurações da conta</Title>

      <p>{user?.username}</p>
    </>
  );
};

export default Profile;
