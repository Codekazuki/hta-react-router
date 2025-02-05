import { useEffect, useState } from "react";
const myUrl = "https://api.github.com/users";
console.log(myUrl);

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(myUrl);
        const users = await response.json();
        setUsers(users);
        console.log(users);
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
    </div>
  );
};

export default GithubUsers;
