import { createContext } from "react";

type ILoginContext = {
    isLogin: boolean;
    setLogin: (state: boolean) => void;
}

export const LoginContext = createContext<ILoginContext>({
    isLogin: false,
    setLogin: () => { },
});