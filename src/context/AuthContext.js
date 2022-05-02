import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null, //get the value of user from the local storage 
  //and if the value doesn't exist set to null by default
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  //store user in local storage to avoid data loss after refresh
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser)); //store our current user on the device local storage in a key value system
    //change the value of current user to a string for storage
  }, [state.currentUser]); //run function whenever the value of current user is changed

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
