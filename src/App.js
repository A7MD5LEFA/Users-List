import { useState } from "react";
import "./App.css";
import data from "./components/data";
import User from "./components/User";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState(data);
  const [search, setSearch] = useState("");
  const searchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue)
  };

  const filterUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search)
  })

  return (
    <div className="app">
      <main>
        <h2 className="title">Users</h2>
        <Navbar searchChange={ searchChange} />
        <div className="container">
          <User people={filterUsers} />
        </div>
      </main>
    </div>
  );
}

export default App;
