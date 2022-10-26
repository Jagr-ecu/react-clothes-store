import { UserData } from "./../../utils/firebase/Firebase";
import {
  ActionWithPayload,
  Action,
  withMatcher,
} from "./../../utils/reducer/Reducer";
import { USER_ACTION_TYPES } from "./UserTypes";
import { AdditionalInformation } from "../../utils/firebase/Firebase";

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData
>;
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCESS,
  UserData
>;
export type SignInFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILURE,
  Error
>;
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: UserData; additionalDetails: AdditionalInformation }
>;
export type SignUpFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

//----------------------------------------------FUNCTIONS-------------------------------------
export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser => ({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  })
);

export const checkUserSession = withMatcher(
  (): CheckUserSession => ({
    type: USER_ACTION_TYPES.CHECK_USER_SESSION,
  })
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => ({
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  })
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => ({
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: { email, password },
  })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess => ({
    type: USER_ACTION_TYPES.SIGN_IN_SUCESS,
    payload: user,
  })
);

export const signInFailure = withMatcher(
  (error: Error): SignInFailure => ({
    type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
    payload: error,
  })
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => ({
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: { email, password, displayName },
  })
);

export const signUpSuccess = withMatcher(
  (
    user: UserData,
    additionalDetails: AdditionalInformation
  ): SignUpSuccess => ({
    type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: { user, additionalDetails },
  })
);

export const signUpFailure = withMatcher(
  (error: Error): SignUpFailure => ({
    type: USER_ACTION_TYPES.SIGN_UP_FAILED,
    payload: error,
  })
);

export const signOutStart = withMatcher(
  (): SignOutStart => ({
    type: USER_ACTION_TYPES.SIGN_OUT_START,
  })
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => ({
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  })
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
    payload: error,
  })
);
