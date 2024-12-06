import { Navigate, Outlet } from 'react-router-dom';
import { Title } from '@mantine/core';
import { useAuth } from '@/hooks';

export default function AppLayout() {
  const { loading, user } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Title ta="center" mb={30}>
        Dashboard
      </Title>
      <Outlet />
    </div>
  );
}
