import { useState, useEffect } from "react";
import "./App.css";
import { getUsers } from "./services/Users";
import styled from "@emotion/styled";

const InfoUser = styled.div`
  background-color: #6f6fd5;
  border: 1px solid black;
  color: white;
  padding: 0.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

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
      <h1>Home</h1>
      <InfoUser>
        <p>Nombre</p>
        <p>Apellido</p>
        <p>Edad</p>
        <p>Email</p>
        <p>Nacionalidad</p>
        <p>Foto</p>
      </InfoUser>
      {users &&
        orderedUsers.map((user) => (
          <InfoUser key={user.email}>
            <p>{user.name.first}</p>
            <p>{user.name.last}</p>
            <p>{user.dob.age}</p>
            <p>{user.email}</p>
            <p>{user.nat}</p>
            <img src={user.picture.thumbnail} alt="" />
          </InfoUser>
        ))}
    </div>
  );
}

export default App;
