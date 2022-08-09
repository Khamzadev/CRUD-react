import React, { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { addBook } from "../api/api";

import { getBook , editBook} from "../api/api";

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

const EditBook = () => {
  const navigate = useNavigate();
  const {id} = useParams()

  //hook
  const [book, setBook] = useState(initialValues);

  useEffect(() => {
    getBookData();
  },[]);

  const getBookData = async () => {
    let res = await getBook(id);
    console.log(res)
    setBook(res.data)
  };

  const onValueChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setBook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const addBookDetails = async () => {
    await editBook(book, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Book</Typography>
      <FormControl>
        <InputLabel>TITLE BOOK</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="title"
          value={book.title}
        />
      </FormControl>
      <FormControl>
        <InputLabel>AUTHOR BOOK</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="author"
          value={book.author}
        />
      </FormControl>
      <FormControl>
        <Button onClick={() => addBookDetails()} variant="contained">
          Edit Book
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditBook;
