import { useState, useEffect } from "react";
import "./App.css";
import { getUsers } from "./services/Users";

function App() {
  const [users, setUsers] = useState("");

  // const testData = getUsers();

  useEffect(() => {
    const data = getUsers();
    setUsers(data);
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
      {/* {users &&
        users.map((data) => {
          return <p>{data.name.first}</p>;
        })} */}
    </div>
  );
}

export default App;
