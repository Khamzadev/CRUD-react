import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from ".././api/api";

const StyledTable = styled(Table)`
  width: 60%;
  margin: 20px auto 0;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksDetails();
  }, []);

  const getBooksDetails = async () => {
    let { data } = await getBooks();
    setBooks(data);
  };

  const deleteBookData = async (id) => {
    await deleteBook(id);
    getBooksDetails();
  };

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Title book</TableCell>
          <TableCell>Author book</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {books.map((book) => (
          <Tbody>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                onClick={() => deleteBookData(book.id)}
                style={{ marginRight: 10 }}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to={`/edit/${book.id}`}
              >
                Edit
              </Button>
            </TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllBooks;
