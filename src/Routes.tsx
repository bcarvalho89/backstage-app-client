import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard.page';
import Login from './pages/Login.page';
import MyBand from './pages/MyBand.page';
import Profile from './pages/Profile.page';
import Shows from './pages/Shows.page';
import Surveys from './pages/Surveys.page';
import Users from './pages/Users.page';

const Routes: React.FC = () => {
  return (
    <BrowserRoutes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
        <Route path="my-band" element={<MyBand />} />
        <Route path="shows" element={<Shows />} />
        <Route path="surveys" element={<Surveys />} />
      </Route>
    </BrowserRoutes>
  );
};

export default Routes;
