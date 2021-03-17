import {
  SIGNIN_EMAIL,
  SIGNIN_PASSWORD,
  SIGNIN_SUCCESS,
} from "../types/actionTypes";

const initialState = {
  email: "",
  password: "",
  currentUserDetails: {
    userName: "",
    email: "",
    password: "",
  },
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_EMAIL: 
      return {
        ...state,
        email: action.payload,
      };
    case SIGNIN_PASSWORD:
      let comparePassword = { ...state };
      return {
        ...state,
        password: action.payload,
      };
    case SIGNIN_SUCCESS:
      let currentUserDetails = { ...state.currentUserDetails };
      currentUserDetails = action.payload;
      return {
        ...state,
        currentUserDetails: currentUserDetails,
      };

    default:
      return state;
  }
};

export default signInReducer;
