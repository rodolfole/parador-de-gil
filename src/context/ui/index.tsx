import { createContext, useContext, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

type UIContextProps = {
  drawerOpen: boolean;

  // Methods
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UIContext = createContext({} as UIContextProps);
export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }: Props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
