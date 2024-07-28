import React, { createContext, useState, ReactNode } from "react";

interface KeyboardContextProps {
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
}

export const KeyboardContext = createContext<KeyboardContextProps | undefined>(
  undefined
);

export const KeyboardProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <KeyboardContext.Provider value={{ values, setValues }}>
      {children}
    </KeyboardContext.Provider>
  );
};
