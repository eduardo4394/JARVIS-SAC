import styled from "@emotion/styled";
import React from "react";
import TableRow from "./TableRow";

const StyledTable = styled.table`
  background-color: white;
  gap: 1rem;
  border-spacing: 0.25rem;
`;

const TableHead = styled.thead`
  background-color: #4976c5;
  color: white;
`;

export default function Table({ data }) {
  return (
    <StyledTable>
      <TableHead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Genero</th>
          <th>Email</th>
          <th>Nacionalidad</th>
          <th>Foto</th>
        </tr>
      </TableHead>
      <tbody>
        {data.map((user) => (
          <TableRow key={user.email} user={user} />
        ))}
      </tbody>
    </StyledTable>
  );
}
