import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "../types";

type UserContextType = {
  user: UserType;
  setUserType: (type: "User" | "Courier" | "FoodProvider") => void;
  userDetailsChange: (user: UserType) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    userType: "",
    id: "",
    name: "",
    hasVisited: false,
    faceIdEnabled: false,
    account: [],
  },
  userDetailsChange: (user: UserType) => {},
  setUserType: (type: "User" | "Courier" | "FoodProvider") => {},
});

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>({
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    userType: "",
    id: "",
    hasVisited: false,
    name: "",
    picture: "",
    account: [],
    faceIdEnabled: false,
  });

  const getUser = async () => {
    const user = await AsyncStorage.getItem("@user");

    if (user !== null) {
      setUser((prev) => JSON.parse(user));
    } else {
      console.log("User Is Empty");
    }
  };

  const setUserType = async (type: "User" | "Courier" | "FoodProvider") => {
    const u: UserType = user;
    u.userType = type;
    setUser((prev) => u);
    console.log(type);

    await AsyncStorage.setItem("@user", JSON.stringify(user));
    await getUser();
  };

  const userDetailsChange = async (newUser: UserType) => {
    setUser((prev) => newUser);

    await AsyncStorage.setItem("@user", JSON.stringify(newUser));
    await getUser();
  };

  const value = {
    user,
    setUserType,
    userDetailsChange,
  };
  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
