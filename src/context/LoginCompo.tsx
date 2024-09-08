import { ReactNode, useState } from "react";
import { LoginContext } from "./LoginContext";

const LoginCompo = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  return (
    <LoginContext.Provider value={{ isLogin, setLogin: setIsLogin, setToken: setToken, token: token }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginCompo;