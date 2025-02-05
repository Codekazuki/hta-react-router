import { useEffect, useState } from "react";

const url = "https://api.github.com/users";
const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const HandleDeleteUser = (id) => {
    setUsers(users.filter((unwantedUser) => unwantedUser.id !== id));
  };

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>incr</button>
      <section>
        {users.map((user) => {
          const { id, login, html_url, avatar_url } = user;
          return (
            <ul key={id}>
              <li>
                <div>
                  <img src={avatar_url} alt={login} height='48px' />
                </div>
                <h1>{login}</h1>
                <p>
                  <a href={html_url}>Link to profile</a>
                </p>
                <button onClick={() => HandleDeleteUser(id)}>
                  Delete User
                </button>
              </li>
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default GithubUsers;
