import { createContext } from "react";

type ILoginContext = {
    isLogin: boolean;
    setLogin: (state: boolean) => void;
    token: string | null;
    setToken: (token: string) => void;
}

export const LoginContext = createContext<ILoginContext>({
    isLogin: false,
    setLogin: () => { },
    token: null,
    setToken: () => { }
});