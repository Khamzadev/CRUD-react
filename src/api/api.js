import axios from "axios";

const API_URL = "http://localhost:4000";

export const addBook = async (data) => {
  try {
    return await axios.post(`${API_URL}/books`, data);
  } catch (error) {
    console.log("Тут ошибка", error.message);
  }
};

export const getBooks = async () => {
  try {
    return await axios.get(`${API_URL}/books`);
  } catch (error) {
    console.log("Тут ошибка", error.message);
  }
};

export const getBook = async (id) => {
  try {
    return await axios.get(`${API_URL}/books/${id}`);
  } catch (error) {
    console.log("Тут ошибка", error.message);
  }
};

export const editBook = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/books/${id}`, data);
  } catch (error) {
    console.log("Тут ошибка", error.message);
  }
};


export const deleteBook = async(id) => {
   try {
     return await axios.delete(`${API_URL}/books/${id}`);
   } catch (error) {
     console.log("Тут ошибка", error.message);
   }
}