import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { useNavigate } from "react-router-dom";


import { addBook } from "../api/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  title: "",
  author: "",
};

const AddBook = () => {

  const navigate = useNavigate();

  //hook
  const [book, setBook] = useState(initialValues);
  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const addBookDetails = async () => {
    await addBook(book);
    navigate('/all')
  };

  return (
    <Container>
      <Typography variant="h4">Add Book</Typography>
      <FormControl>
        <InputLabel>TITLE BOOK</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="title" />
      </FormControl>
      <FormControl>
        <InputLabel>AUTHOR BOOK</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="author" />
      </FormControl>
      <FormControl>
        <Button onClick={() => addBookDetails()} variant="contained">
          Add Book
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddBook;
