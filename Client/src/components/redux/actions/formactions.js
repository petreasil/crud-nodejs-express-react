import { ADD_DATA, FETCH_DATA } from "../types/types";
import * as api from "../../Api/index";

export const addData = (payload) => {
  console.log(payload);
  return {
    type: ADD_DATA,
    payload,
  };
};

export const getOne = (id) => async (dispatch) => {
  try {
    const { data } = await api.getOneData(id);

    dispatch({ type: "GET_ONE", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const initData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: FETCH_DATA, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const postData = (payload) => async (dispatch) => {
  try {
    console.log(payload);
    const data = await api.createPost(payload);
    console.log(data.data);

    dispatch({ type: "CREATE", payload: data.data });
  } catch (err) {
    console.log(err);
  }
};

export const updateHotel = (payload) => async (dispatch) => {
  try {
    const response = await api.updateData(payload.id, payload);

    dispatch({ type: "UPDATE", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteHotel = (id) => async (dispatch) => {
  console.log(id);
  try {
    await api.deleteData(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (err) {
    console.log(err);
  }
};
export const edithotel = (hotel) => ({ type: "EDIT_TEST", payload: hotel });
