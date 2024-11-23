import React, { createContext, useReducer } from "react";
import axios from "axios";

const AppContext = createContext();

const initialState = {
  users: [],
  roles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    const { data } = await axios.get("http://localhost:5000/users");
    dispatch({ type: "SET_USERS", payload: data });
  };

  const fetchRoles = async () => {
    const { data } = await axios.get("http://localhost:5000/roles");
    dispatch({ type: "SET_ROLES", payload: data });
  };

  return (
    <AppContext.Provider value={{ state, dispatch, fetchUsers, fetchRoles }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
