import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext<{
    loggedIn: boolean;
    setIsLoggedIn?: (val: boolean) => void;
}>({ loggedIn: false, setIsLoggedIn: undefined });

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{
      loggedIn,setIsLoggedIn
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, useAppContext, AppContextProvider };
