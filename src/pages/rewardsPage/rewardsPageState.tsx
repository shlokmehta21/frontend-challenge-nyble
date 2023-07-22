import useGlobalState from 'globalState/useGlobalState';
import { ReducerActionType } from 'pages/reducerActionType';
import { Dispatch, ReducerAction, useCallback, useEffect, useMemo, useReducer } from 'react';

export type ScreenType = typeof SCREENS;

export type RewardsPageStateType = {
  currScreen: keyof ScreenType;
  prevScreen?: { [key in keyof ScreenType]?: keyof ScreenType };
};

export const SWITCH_ACTIONS = {
  SWITCH_SCREEN: 'SWITCH_SCREEN' as 'SWITCH_SCREEN',
  HANDLE_BACK: 'HANDLE_BACK' as 'HANDLE_BACK',
};

export const useRewardsPageState = (): [RewardsPageStateType, Dispatch<ReducerAction<any>>] => {
  const [globalState, globalDispatch] = useGlobalState();

  const subscription = globalState && globalState.subscription ? globalState.subscription : null;

  const initialSettingsPageState: RewardsPageStateType = useMemo(() => {
    return {
      currScreen: SCREENS.MAIN_SCREEN,
      prevScreen: {},
    };
  }, []);
  const rewardsPageReducer = useCallback(
    (state: RewardsPageStateType, action: ReducerActionType) => {
      switch (action.type) {
        case SWITCH_ACTIONS.SWITCH_SCREEN:
          const newScreen = action.payload.newScreen;
          return {
            currScreen: newScreen,
            prevScreen: { ...state.prevScreen, [newScreen]: state.currScreen },
          };
        case SWITCH_ACTIONS.HANDLE_BACK:
          return {
            ...state,
            currScreen: action.payload.screen,
          };
        default:
          return {
            ...state,
          };
      }
    },
    []
  );

  const [state, dispatch] = useReducer(rewardsPageReducer, initialSettingsPageState);

  return [state, dispatch];
};

export const SCREENS = {
  MAIN_SCREEN: 'MAIN_SCREEN' as 'MAIN_SCREEN',
  REDEEM_SCREEN: 'REDEEM_SCREEN' as 'REDEEM_SCREEN',
};
