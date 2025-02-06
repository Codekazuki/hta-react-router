import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [name, setName] = useState("Ayodele");
  const changeName = () => {
    setName("Greatness");
  };
  return (
    <GlobalContext.Provider value={{ name, setName, changeName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
