import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface IAppContext {
  generatingContent: boolean;
  setGeneratingContent: (value: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('App context must be used within a AppProvider');
  }
  return context;
};

interface IProps {
  childern: ReactNode;
}
const AppContextProvider: FC<IProps> = ({ childern }) => {
  const [generatingContent, setGeneratingContent] = useState(false);

  return (
    <AppContext.Provider value={{ generatingContent, setGeneratingContent }}>
      {childern}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
