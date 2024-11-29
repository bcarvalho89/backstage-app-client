import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard.page';
import Login from './pages/Login.page';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <p>Not Found</p>,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
