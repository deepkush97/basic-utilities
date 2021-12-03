import { createContext, FC, useContext, useState } from "react";

export type AppContextType = {
  title: string;
  content: string;
};

const initialValue: AppContextType = {
  title: "",
  content: "",
};

export const AppContext = createContext<AppContextType>(initialValue);

export const AppContextProvider: FC = ({ children }) => {
  const [title, setTitle] = useState(
    "Next.js - TailwindCSS - Github Pages - Typescript"
  );
  const [content, setContent] =
    useState(`A project to be used as a starter for Next.js project which includes
  tailwind, it's configuration, typescript and also the github action
  workflow deployment to Github pages after pushing commit to the master
  branch.`);
  return (
    <AppContext.Provider value={{ title, content }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
