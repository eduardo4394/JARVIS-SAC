import styled from "@emotion/styled";
import React from "react";

const UserImg = styled.img`
  border-radius: 50%;
`;

const TableData = styled.td`
  padding: 1rem;
  background-color: #b6c7e7;
  font-weight: 600;
`;

const TableRow = ({ user }) => {
  return (
    <tr>
      <TableData>{user.name.first}</TableData>
      <TableData>{user.name.last}</TableData>
      <TableData>{user.dob.age}</TableData>
      <TableData>{user.gender}</TableData>
      <TableData>{user.email}</TableData>
      <TableData>{user.nat}</TableData>
      <TableData>
        <UserImg src={user.picture.thumbnail} alt="foto de usuario" />
      </TableData>
    </tr>
  );
};

export default TableRow;
