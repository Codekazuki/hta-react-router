import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const myUrl = "https://api.github.com/users";
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const clearUser = () => {
    setUsers([]);
  };
  const reloadUsers = async () => {
    try {
      const response = await fetch(myUrl);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        handleIncrease,
        clearUser,
        users,
        setUsers,
        myUrl,
        reloadUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
