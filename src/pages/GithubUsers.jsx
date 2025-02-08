import { useEffect } from "react";
import { useGlobalContext } from "../context";

const GithubUsers = () => {
  const { users, clearUser, setUsers, myUrl } = useGlobalContext();
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

  return (
    <div>
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <ul key={id}>
            <li>
              <div>
                <img src={avatar_url} alt={login} height='96px' />
              </div>
              <div>
                <h1>{login}</h1>
                <a href={html_url}>take me to {login} page</a>
              </div>
            </li>
          </ul>
        );
      })}
      <button onClick={clearUser}>Clear User</button>
    </div>
  );
};

export default GithubUsers;
