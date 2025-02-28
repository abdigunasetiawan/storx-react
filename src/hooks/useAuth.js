import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = getUsername(token);
      setUser(user);
      setIsLogin(true);
    } else {
      window.location.href = "/login";
      setIsLogin(false);
    }
  }, []);

  return { isLogin, user };
};

export default useAuth;
