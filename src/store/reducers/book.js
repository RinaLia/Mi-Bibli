import { GET_BOOK } from "../type";

const initialState = {
  dataBook: [],
  pageInfo: [],
};

export default (state = initialState, action) => {
  console.log("action.payload", action.payload);
  // console.log("action.payload.data", action.payload.data);

  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        dataBook: action.payload.data,

        // pageInfo: action.payload.data.pageInfo,
      };
    default:
      return state;
  }
};
