import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postToEndpoint } from "../api/responseHandler";
import API from "../api/API";

type ValueType = {
  token: string | null;

  isAuthenticated: boolean | null;
  authenticate: Function;
  logout: Function;
};

export const AuthContext = createContext({
  token: "",
  refresh: "",
  isAuthenticated: false,
  authenticate: (token: string, refresh: string) => {},
  logout: async (refresh: string) => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  function authenticate(token: string, refresh: string) {
    setAuthToken(() => token);
    setRefreshToken(() => refresh);

    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("refresh", refresh);
    
  }

  async function logout(refresh: string) {
    try {
      const res = await postToEndpoint(API.logout, {
        refresh,
      })
      console.log(res);

      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("refresh");

      setAuthToken(null);
      setRefreshToken(null);
    } catch(err) {
      console.log(err)
    }
    



  }

  const value = {
    token: authToken,
    refresh: refreshToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  // @ts-ignore
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
