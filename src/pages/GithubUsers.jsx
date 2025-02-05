import { useEffect, useState } from "react";

const url = "https://api.github.com/users";
const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>incr</button>
    </div>
  );
};

export default GithubUsers;
