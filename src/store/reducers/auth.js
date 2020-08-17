import {
  POST_REGISTER_SUCCESSFUL,
  POST_REGISTER_FAILED,
  POST_REGISTER_RESET,
  POST_LOGIN_SUCCESSFUL,
  POST_LOGIN_FAILED,
} from "../type";

const initialState = {
  isRegisterError: true,
  isLoginError: null,
  errMsg: null,
  status: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTER_SUCCESSFUL:
      return { ...state, isRegisterError: false };
    case POST_REGISTER_FAILED:
      return { ...state, isRegisterError: true };
    case POST_REGISTER_RESET:
      return { ...state, isRegisterError: true, errMsg: null };
    case POST_LOGIN_SUCCESSFUL:
      return {
        ...state,
        isRegisterError: false,
        isLoginError: false,
        token: action.payload.data,
        errMsg: action.payload.message,
      };
    case POST_LOGIN_FAILED:
      return {
        ...state,
        isRegisterError: true,
        isLoginError: true,
        token: [],
        errMsg: action.payload.message,
      };
    default:
      return state;
  }
};
