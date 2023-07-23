import {
  Dispatch,
  ReducerAction,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';


import { ReducerActionType } from 'pages/reducerActionType';
import useGetAccountQuery from 'graphql/generated/queries/getAccountQuery';

export const ACTIONS = {
  SWITCH_TAB: 'SWITCH_TAB' as 'SWITCH_TAB',
};

export const TABS = {
  ACCOUNT_TAB: 'ACCOUNT_TAB' as 'ACCOUNT_TAB',
  REWARDS_TAB: 'REWARDS_TAB' as 'REWARDS_TAB',
  WOOF_TAB: 'WOOF_TAB' as 'WOOF_TAB',
};

export type TabType = typeof TABS;

export type HomePageStateType = {
  currTab: keyof TabType;
};

export const useHomePageState = (): [
  HomePageStateType,
  Dispatch<ReducerAction<any>>
] => {

  const initialHomePageState: HomePageStateType = useMemo(() => {
    return {
      currTab: TABS.ACCOUNT_TAB,
    };
  }, []);

  const homePageReducer = useCallback(
    (state: HomePageStateType, action: ReducerActionType) => {
      switch (action.type) {
        case ACTIONS.SWITCH_TAB:
          return {
            currTab: action.payload.newTab,
          };
        default:
          return {
            ...state,
          };
      }
    },
    []
  );

  const [state, dispatch] = useReducer(homePageReducer, initialHomePageState);

  return [state, dispatch];
};
