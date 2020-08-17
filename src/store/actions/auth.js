import {
  POST_REGISTER_SUCCESSFUL,
  POST_REGISTER_FAILED,
  POST_REGISTER_RESET,
  POST_LOGIN_SUCCESSFUL,
  POST_LOGIN_FAILED,
} from "../type";
import { Request, url } from "../../helpers/request";

export const postRegister = (email, password) => (dispatch) => {
  Request(url + "books/auth/register", "POST", { email, password }).then(
    (data) => {
      console.log("redux =", data);
      if (data.status === 200) {
        dispatch({ type: POST_REGISTER_SUCCESSFUL, payload: data });
      } else {
        dispatch({ type: POST_REGISTER_FAILED, payload: [] });
      }
    }
  );
};

export const postRegisterReset = () => (dispatch) =>
  dispatch({ type: POST_REGISTER_RESET, payload: [] });

export const postLogin = (email, password) => (dispatch) => {
  Request(url + "books/auth/login", "POST", { email, password }).then(
    (data) => {
      console.log("redux =", data);

      if (data.status === 200) {
        dispatch({ type: POST_LOGIN_SUCCESSFUL, payload: data });
      } else {
        dispatch({ type: POST_LOGIN_FAILED, payload: data });
      }
    }
  );
};
