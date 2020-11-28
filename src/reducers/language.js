/* eslint-disable prettier/prettier */
import type {Action} from '../actions/types';
import {SET_USER} from '../actions/user';

export type State = {
    languageType: 1,
};
const initialState = {
    languageType: 1,
};

export default function(state: State = initialState, action: Action): State {
  if (action.type === 'SET_LANGUAGE') {
    return {
      ...state,
      languageType: action.payload,
    };
  }

  return state;
}
