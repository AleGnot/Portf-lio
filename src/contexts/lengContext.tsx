import { createContext, useState, ReactNode } from "react";

type LangContextProps = {
    children: ReactNode;
}

type LangContextType = {
    isEnglish: boolean,
    setIsEnglish: (newState: boolean) => void,
}

const initialState = {
    isEnglish: false,
    setIsEnglish: () => {}
}

export const LangContext = createContext<LangContextType>(initialState);

export const LangStore = ({ children }: LangContextProps) => {
    const [isEnglish, setIsEnglish] = useState(initialState.isEnglish);

    return (
        <LangContext.Provider value={{ isEnglish, setIsEnglish }}>
            {children}
        </LangContext.Provider>
    )
}