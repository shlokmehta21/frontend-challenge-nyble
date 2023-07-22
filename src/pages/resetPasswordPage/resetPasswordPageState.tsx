import {
  Dispatch,
  ReducerAction,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import { useApolloClient } from '@apollo/client';

import { useHistory, useLocation } from 'react-router';
import { Location } from 'history';

import { getSearchParams } from 'utils/url';
import { validateUUID } from 'utils/validation/validate';

import { useWindowSize } from 'utils/windowSize/useWindowSize';
import { useAuthState } from 'auth/basicAuth';

import { ReducerActionType } from 'pages/reducerActionType';

import { useToast } from 'components/widget/toast/Toast';

import sendVerifyResetPasswordTokenMutation from 'graphql/generated/mutations/verifyResetPasswordTokenMutation';
import { ERROR_CODES } from 'graphql/errorCodes';

import { RESET_PASSWORD_PAGE } from 'Routes';

export const SCREENS = {
  SEND_PASSWORD_RESET_SCREEN: 'SEND_PASSWORD_RESET_SCREEN' as 'SEND_PASSWORD_RESET_SCREEN',
  RESET_PASSWORD_SCREEN: 'RESET_PASSWORD_SCREEN' as 'RESET_PASSWORD_SCREEN',
  RESET_PASSWORD_LOADING_SCREEN: 'RESET_PASSWORD_LOADING_SCREEN' as 'RESET_PASSWORD_LOADING_SCREEN',
  RESET_PASSWORD_ERROR_SCREEN: 'RESET_PASSWORD_ERROR_SCREEN' as 'RESET_PASSWORD_ERROR_SCREEN',
};

export const UPDATE_STATE = 'UPDATE_STATE';
export const SWITCH_SCREEN = 'SWITCH_SCREEN';

export const VERIFY_TOKEN = 'VERIFY_TOKEN';
export const TOKEN_VERIFIED = 'TOKEN_VERIFIED';
export const EXPIRED_TOKEN = 'EXPIRED_TOKEN';

export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';

export const HANDLE_ERROR = 'HANDLE_ERROR';

export type ScreenType = typeof SCREENS;

export type ResetPasswordPageStateType = {
  dispatch: (action: any) => void;

  currScreen: keyof ScreenType;
  currScreenIndex: number;

  resetToken: string;
};

export type ResetPasswordPageAndGlobalStateType = ResetPasswordPageStateType & {
  searchParams: { [key: string]: string };
  location: Location;
  userId: string;
  isLoggedIn: boolean;
  windowWidth: number;
};

export const useResetPasswordPageState = (
  stateOverrides?: object
): [ResetPasswordPageAndGlobalStateType, Dispatch<ReducerAction<any>>] => {
  const firstRender = useRef(true);
  const apolloClient = useApolloClient();
  const location = useLocation();
  const history = useHistory();
  const [openErrorToast] = useToast();
  const searchParams = useMemo(() => getSearchParams(location.search), [location.search]);
  const [isLoggedIn, _, userId] = useAuthState();
  const [windowWidth] = useWindowSize();

  const tokenExpired = () => {
    dispatch({
      type: EXPIRED_TOKEN,
    });
    openErrorToast('Password reset link has expired');
    history.push(RESET_PASSWORD_PAGE);
  };

  const verifyToken = (token: string) => {
    dispatch({
      type: TOKEN_VERIFIED,
      payload: {
        resetToken: token,
      },
    });
  };

  const getAndMaybeVerifyResetToken = (searchParams: any) => {
    const tokenUri = searchParams['token'];
    if (tokenUri) {
      const decodedToken = decodeURI(tokenUri);
      const valid = validateUUID(decodedToken);
      if (valid) {
        dispatch({
          type: VERIFY_TOKEN,
          payload: {
            token: decodedToken,
          },
        });
      } else {
        openErrorToast('Invalid password reset link.');
      }
    }
  };

  useEffect(() => {
    getAndMaybeVerifyResetToken(searchParams);
  }, [searchParams]);

  const initialResetPasswordPageState: ResetPasswordPageStateType = useMemo(() => {
    return {
      dispatch: null,

      currScreen: SCREENS.SEND_PASSWORD_RESET_SCREEN,
      currScreenIndex: 0,

      resetToken: '',
      ...stateOverrides,
    };
  }, [searchParams, stateOverrides]);

  const resetPasswordPageReducer = useCallback(
    (state: ResetPasswordPageStateType, action: ReducerActionType) => {
      switch (action.type) {
        case VERIFY_TOKEN:
          verifyToken(action.payload.token);

          return {
            ...state,
            currScreen: SCREENS.RESET_PASSWORD_LOADING_SCREEN,
          };

        case TOKEN_VERIFIED:
          const token = action.payload.resetToken;
          return {
            ...state,
            currScreen: SCREENS.RESET_PASSWORD_SCREEN,
            resetToken: token,
          };
        case RESET_PASSWORD_SUCCESS:
          return {
            resetToken: '',
            ...state,
          };
        case EXPIRED_TOKEN:
          return {
            resetToken: '',
            ...state,
          };
        case HANDLE_ERROR:
          return {
            ...state,
            currScreen: SCREENS.RESET_PASSWORD_ERROR_SCREEN,
          };
        case UPDATE_STATE:
          return {
            ...state,
            ...action.payload,
          };

        default:
          return {
            ...state,
          };
      }
    },
    [firstRender, apolloClient, location, searchParams, isLoggedIn, userId]
  );

  const [state, dispatch] = useReducer(resetPasswordPageReducer, initialResetPasswordPageState);

  // Update first render state
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, []);

  const passwordResetAndGlobalState = {
    ...state,
    location,
    searchParams,
    userId,
    isLoggedIn,
    windowWidth,
  };

  return [passwordResetAndGlobalState, dispatch];
};
