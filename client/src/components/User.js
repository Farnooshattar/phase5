function User({ user }) {
  const {
    id,
    first_name,
    last_name,
    username,
    email,
    birthday,
    created_at,
    updated_at,
  } = user;
  return <div>{first_name}</div>;
}
export default User;
