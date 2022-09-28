import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState(localStorage.token && localStorage.token);
  const config = {
    headers: {
      token: token,
    },
  };
  const navigate = useNavigate(); 
  let url = "http://localhost:3000/";

  const sendInfo = async (info, type) => {
    let newUrl = "";

    if (type === 1) {
      newUrl = url + "login";
    } else {
      newUrl = url + "register";
    }

    try {
      const res = await axios.post(newUrl, info);
      if (res.status === 200) {
        setError(false);
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        navigate("/tasks");
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  const logOut = () => {
    navigate("/");
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.token) {
      setIsAuth(true);
    } else setIsAuth(false);
  }, [localStorage.token]);

  return (
    <AuthContext.Provider value={{ isAuth, error, config, logOut, sendInfo, setError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const { isAuth, error, config, logOut, sendInfo, setError } = useContext(AuthContext);
  return { isAuth, error, config, logOut, sendInfo, setError };
};
