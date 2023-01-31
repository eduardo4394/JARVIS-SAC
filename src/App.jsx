import { useState, useEffect } from "react";
import "./App.css";
import { getUsers } from "./services/Users";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  const settingData = async () => {
    const data = await getUsers();
    setUsers(data.results);
  };

  useEffect(() => {
    settingData();
  }, []);

  const orderedUsers = [...users].sort((a, b) => a.dob.age - b.dob.age);
  console.log(orderedUsers);

  return (
    <div className="App">
      <Table data={orderedUsers} />
    </div>
  );
}

export default App;
