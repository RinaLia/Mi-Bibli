import { GET_BOOK } from "../type";

const initialState = {
  dataBook: [],
  pageInfo: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        dataBook: action.payload.data.data,
        pageInfo: action.payload.data.pageInfo,
      };
    default:
      return state;
  }
};
