import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard.page';
import Login from './pages/Login.page';
import Profile from './pages/Profile.page';

const Routes: React.FC = () => {
  return (
    <BrowserRoutes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </BrowserRoutes>
  );
};

export default Routes;
