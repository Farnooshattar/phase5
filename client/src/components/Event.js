function Event({ event }) {
  const { title, description } = event;
  return (
    <div>
      <li>
        {title}:{description}
      </li>
    </div>
  );
}
export default Event;
