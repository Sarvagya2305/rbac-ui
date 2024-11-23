import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const CustomTable = ({ columns, data, onEdit, onDelete }) => (
  <Table>
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell key={col}>{col}</TableCell>
        ))}
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {columns.map((col) => (
            <TableCell key={col}>{row[col]}</TableCell>
          ))}
          <TableCell>
            <IconButton onClick={() => onEdit(row)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => onDelete(row.id)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomTable;
