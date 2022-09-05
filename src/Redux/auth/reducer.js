import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,LOGOUT,REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes";

const token = loadData(process.env.REACT_APP_LOCALHOST_KEY);
// verify
// once verified
const initState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
   Errormsg:""
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
       
        isError: false
      };
    }
    case REGISTER_SUCCESS: {
      saveData( process.env.REACT_APP_LOCALHOST_KEY, payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
       

      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        Errormsg:  payload,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
       
        isError: false
      };
    }
    case LOGIN_SUCCESS: {
      saveData( process.env.REACT_APP_LOCALHOST_KEY, payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
       

      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        Errormsg:  payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: false,
        Errormsg:  "",
      };
    }
    default:
      return state;
  }
};

export { authReducer };
