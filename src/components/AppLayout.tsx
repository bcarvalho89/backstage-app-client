import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/hooks';
import Sidebar from './Layout/Sidebar/Sidebar';
import Topbar from './Layout/Topbar/Topbar';
import classes from './AppLayout.module.css';

export default function AppLayout() {
  const { loading, user } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Topbar />
      <Sidebar />

      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
