import { useEffect, useState } from "react";
const myUrl = "https://api.github.com/users";
console.log(myUrl);

const GithubUsers = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(myUrl);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
};

export default GithubUsers;
