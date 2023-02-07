import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ValueType = {
  token: string | null;
  isAuthenticated: boolean | null;
  authenticate: Function;
  logout: Function;
};

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authToken, setAuthToken] = useState<string | null>(null);

  function authenticate(token: string) {
    setAuthToken(() => token);
    AsyncStorage.setItem("token", token);
  }

  async function logout() {
    await AsyncStorage.removeItem("token");

    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
