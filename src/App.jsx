import { useState, useEffect } from "react";
import { getUsers } from "./services/Users";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  //Sets data from users
  const settingData = async () => {
    const data = await getUsers();
    setUsers(data.results);
  };

  //Renders data from users at the start of the program
  useEffect(() => {
    settingData();
  }, []);

  //Sorts users by age in ascending order
  const sortedUsers = [...users].sort((a, b) => a.dob.age - b.dob.age);
  console.log(sortedUsers);

  return (
    <div>
      <Table data={sortedUsers} />
    </div>
  );
}

export default App;
