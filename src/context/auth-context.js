import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/auth-reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: "",
    token: "",
  });

  if (!authState.token) {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      authDispatch({ type: "INITIAL_CHECK", payload: { user, token } });
    }
  }

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
