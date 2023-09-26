import React from "react";
import Event from "./Event";

function EventList({ events }) {
  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
