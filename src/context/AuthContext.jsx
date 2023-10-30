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
  const [authorName, setAuthorName] = useState(
    localStorage.getItem("authorName") || null
  );

  const login = (newToken, authorName) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    const decodedToken = jwt_decode(newToken);
    const tokenAuthorId = decodedToken.userId;
    localStorage.setItem("authorId", tokenAuthorId);
    setAuthorId(tokenAuthorId);
    localStorage.setItem("authorName", authorName);
    setAuthorName(authorName);
  };

  const logout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      setToken(null);
      setAuthorId(null);
      setAuthorName(null);
      localStorage.removeItem("token");
      localStorage.removeItem("authorId");
      localStorage.removeItem("authorName");
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, authorId, login, logout, authorName }}
    >
      {children}
    </AuthContext.Provider>
  );
}
