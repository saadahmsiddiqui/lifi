import React, { createContext, useContext, useState } from 'react';

type AccountState = {
  loading: boolean;
  message: string;
  error: null | any,
  success: boolean;
}

const AppContext = createContext<{
    loggedIn: boolean;
    setIsLoggedIn?: (val: boolean) => void;
    accountCreationState: AccountState,
    setAccountCreationState?: (param: AccountState) => void;
}>({ loggedIn: false, setIsLoggedIn: undefined, accountCreationState: {
  loading: true,
  message: '',
  error: null,
  success: false
}, setAccountCreationState: undefined });

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [accountCreationState, setAccountCreationState] = useState({
    loading: true,
    message: '',
    error: null,
    success: false
  });

  return (
    <AppContext.Provider value={{
      loggedIn, setIsLoggedIn, accountCreationState, setAccountCreationState
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, useAppContext, AppContextProvider };
