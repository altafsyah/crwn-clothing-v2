import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// Actual Value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcsribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
