import { 
    SET_USER_EMAIL,
    SET_USER_PASSWORD,
    SET_USER_USERNAME,
} from "../types/actionTypes";

const initialState = {
    userName: "",
    email: "",
    password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case Types.SIGN_IN:
    //   console.log("signin", action.payload.user);
    //   return {
    //     ...state,
    //     user: action.payload.user,
    //   };

    case SET_USER_USERNAME:
      let currentUser = { ...state};
      return {
        ...state,
        userName: action.payload
      };

    case SET_USER_EMAIL:
      let email = { ...state };
      
      return {
        ...state,
        email: action.payload
      };

    case SET_USER_PASSWORD:
      let password = { ...state };
      return {
        ...state,
        password: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
