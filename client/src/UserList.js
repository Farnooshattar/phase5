import React from "react";
import User from "./User";

function UserList({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
