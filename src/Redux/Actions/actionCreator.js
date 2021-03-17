export const setUserName = (userName) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER_USERNAME", payload: userName });
  };
};

export const setUserEmail = (email) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER_EMAIL", payload: email });
  };
};

export const setUserPassword = (password) => {
  return (dispatch) => {
    dispatch({ type: "SET_USER_PASSWORD", payload: password });
  };
};

// export const signUpUser = ()