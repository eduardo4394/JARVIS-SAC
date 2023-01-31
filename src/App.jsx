import { useState, useEffect } from "react";
import { getUsers } from "./services/Users";
import Table from "./components/Table";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0.75rem auto;
`;

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
    <Container>
      <Table data={sortedUsers} />
    </Container>
  );
}

export default App;
