import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks';
import Sidebar from './Layout/Sidebar/Sidebar';
import Topbar from './Layout/Topbar/Topbar';

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
      <Topbar />
      <Sidebar />

      <Outlet />
    </div>
  );
}
