import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const clearUser = () => {
    setUsers([]);
  };

  return (
    <GlobalContext.Provider
      value={{ count, setCount, handleIncrease, clearUser, users, setUsers }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
