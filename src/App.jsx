import { useState } from "react";
import reactLogo from "./assets/react.svg";
import UserInput from "./components/UserInput";
import List from "./components/List";
import "./App.css";

function App() {
  const [stories, setStories] = useState([]);

  return (
    <div className="App">
      <h1>Hacker News</h1>
      <UserInput setStories={setStories} />
      <List stories={stories} />
    </div>
  );
}

export default App;
