import { useState } from "react";
import "./App.css";
import data from "./components/data";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState(data);
  return (
    <div className="app">
      <main>
        <Navbar />
        <div className="container">
          <User people={users} />
        </div>
      </main>
    </div>
  );
}

export default App;
