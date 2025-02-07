import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((c) => c + 1);
  };

  return (
    <GlobalContext.Provider value={{ count, setCount, handleIncrease }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
