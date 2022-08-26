import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase";

// Value to be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//Provider ---> children = app
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        toast.success(`You have been successfully logged in as: \n ${user.email}`);
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
