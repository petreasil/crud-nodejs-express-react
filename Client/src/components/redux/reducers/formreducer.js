import { FETCH_DATA } from "../types/types";

const initialState = {
  data: [],
  singleHotel: {},
  hotelToEdit: undefined,
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case "EDIT_TEST":
      return { ...state, hotelToEdit: action.payload };
    case "GET_ONE":
      return {
        ...state,
        singleHotel: action.payload,
        editHotel: true,
      };
    case "CREATE":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "UPDATE":
      const editHotel = state.data.map((hotel) =>
        hotel.id === action.payload.id ? action.payload : hotel
      );
      return { ...state, data: editHotel, hotelToEdit: undefined };

    case "DELETE":
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
      };
    default:
      return state;
  }
}
