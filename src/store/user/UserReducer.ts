import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/Firebase";
import {
  signInSuccess,
  signOutSuccess,
  signInFailure,
  signUpFailure,
  signOutFailed,
} from "./UserAction";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signInFailure.match(action) ||
    signUpFailure.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;

  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCESS:
  //     return { ...state, currentUser: payload };
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return { ...state, currentUser: null };
  //   case USER_ACTION_TYPES.SIGN_IN_FAILURE:
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILURE:
  //     return { ...state, error: payload };
  //   default:
  //     return state;
  // }
};
