import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Router basename={process.env.REACT_APP_BASE_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
