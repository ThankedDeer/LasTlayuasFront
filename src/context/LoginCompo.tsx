import { ReactNode, useState } from "react";
import { LoginContext } from "./LoginContext";

const LoginCompo = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const updateLoginState = (state: boolean) => {
    setIsLogin(state);
  };

  return (
    <LoginContext.Provider value={{ isLogin, setLogin: updateLoginState }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginCompo;