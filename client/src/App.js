import React, { useEffect, useState } from "react";
import UserList from "./components/UserList";
import { SignIn } from "./components/SignIn";
import Slideshow from "./components/SlideShow";
import MyCalendar from "./components/MyCalendar";
import "./App.css"; // Import your global CSS file

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <main className="main-container">
      <div className="top-container">
        <div className="slideshow-container">
          <h1>Events Slideshow</h1>
          <Slideshow />
        </div>
      </div>
      <div className="bottom-container">
        <div className="signin-container">
          <h1>Sign In</h1>
          <SignIn users={users} />
        </div>
        <div className="calendar-container">
          <h1>Events Calendar</h1>
          <MyCalendar />
        </div>
      </div>
    </main>
  );
}

export default App;
