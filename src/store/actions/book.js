import { GET_BOOK } from "../type";
import { Request, url } from "../../helpers/request";

export const getBook = () => (dispatch) => {
  Request(url + "books", "GET").then((val) => {
    if (val.status) {
      dispatch({ type: GET_BOOK, payload: val.data });
    }
  });
};
