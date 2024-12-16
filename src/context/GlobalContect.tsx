"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface IUser {
  email: string;
  name: string;
}

interface AuthContextType {
  user: IUser | null;
  logout: () => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (value: boolean) => void;
  setUser: (value: IUser) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser>({ email: "", name: "" });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isUser = localStorage.getItem("isUserLoggedIn");
      if (isUser) {
        setIsUserLoggedIn(true);
      }
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("isUserLoggedIn");
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isUserLoggedIn, setIsUserLoggedIn, setUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
