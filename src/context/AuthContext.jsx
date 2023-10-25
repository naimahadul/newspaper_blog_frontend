import React, { createContext, useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [authorId, setAuthorId] = useState(
    localStorage.getItem("authorId") || null
  );

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    const decodedToken = jwt_decode(newToken);
    const tokenAuthorId = decodedToken.userId;
    localStorage.setItem("authorId", tokenAuthorId);
    setAuthorId(tokenAuthorId);
  };

  const logout = () => {
    setToken(null);
    setAuthorId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("authorId");
    window.alert("Are you sure you want to logout?");
    
  };

  return (
    <AuthContext.Provider value={{ token, authorId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
