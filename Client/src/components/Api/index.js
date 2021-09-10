import axios from "axios";

const url = "http://localhost:5000/";

export const fetchData = () => axios.get(url);
export const createPost = (newData) => axios.post(url, newData);
export const getOneData = (id) => axios.get(`${url}${id}`);
export const updateData = (id, updatedData) =>
  axios.patch(`${url}${id}`, updatedData);
export const deleteData = (id) => axios.delete(`${url}${id}`);
