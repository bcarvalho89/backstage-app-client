import { Outlet } from 'react-router-dom';
import { Title } from '@mantine/core';

export default function AppLayout() {
  return (
    <div>
      <Title ta="center" mb={30}>
        Dashboard
      </Title>
      <Outlet />
    </div>
  );
}
