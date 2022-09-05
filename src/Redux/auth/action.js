import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS ,LOGOUT,REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes";
import axios from "axios";

import { loginRoute,registerRoute } from "../../utils/APIRoutes"
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err
  };
};
const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  };
};

const registerSuccess = (token) => {
  return {
    type: REGISTER_SUCCESS,
    payload: token
  };
};

const registerFailure = (err) => {
  return {
    type:REGISTER_FAILURE,
    payload: err
  };
};
const logOut = () => {
  return {
    type: LOGOUT,
    payload: ""
  };
};
const logoutUser= (payload) => async(dispatch) => {
  const failureAction = logOut();
  dispatch(failureAction);
}



const loginUser = (payload) => async(dispatch) => {
  const requestAction = loginRequest();
  dispatch(requestAction);
  const { username, password } = payload;
  const { data } = await axios.post(loginRoute, {
    username,
    password,
  });
  if (data.status === false) {
  

    const failureAction = loginFailure(data.msg);
    dispatch(failureAction);
  }
  if (data.status === true) {
   

    const successAction = loginSuccess(JSON.stringify(data.user));
  dispatch(successAction);


  }


};

const registerUser = (payload) => async(dispatch) => {
  const requestAction = registerRequest();
  dispatch(requestAction);
  const { email, username, password  } = payload;
  const { data } = await axios.post(registerRoute, {
    email, username, password ,
  });
  if (data.status === false) {
  

    const failureAction = registerFailure(data.msg);
    dispatch(failureAction);
  }
  if (data.status === true) {
   

    const successAction = registerSuccess(JSON.stringify(data.user));
  dispatch(successAction);


  }


};
export { loginRequest, loginSuccess, loginFailure, loginUser ,logoutUser,registerUser};
