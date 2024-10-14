'use client';

import React, { FC, ReactNode } from "react";

export interface RootStore {
  handleMeAiToggle: () => void;
  meAiActivated: boolean;
}

export const rootContext = React.createContext<
RootStore | null
>(null);

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider: FC<RootProviderProps> = ({ children }) => {
  const [meAiActivated, setMeAiActivated] = React.useState(false);

  const handleMeAiToggle = () => {
    setMeAiActivated((p) => !p);
  };

  return (
    <rootContext.Provider
      value={{
        handleMeAiToggle,
        meAiActivated,
      }}>{children}
    </rootContext.Provider>
  );
};