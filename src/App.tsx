import React, { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import AppRoutes from "./routes";
import { JwtPayload, jwtDecode } from "jwt-decode";

const App: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp && decoded.exp < currentTime) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      } catch (error) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
};

export default App;
