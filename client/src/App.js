import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { SignIn } from "./components/SignIn";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <main>
      <SignIn users={users} />
      <UserList users={users} />
    </main>
  );
}

export default App;
