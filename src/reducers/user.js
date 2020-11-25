/* eslint-disable prettier/prettier */
import type {Action} from '../actions/types';
import {SET_USER} from '../actions/user';

export type State = {
  username: string,
};
const initialState = {
  name: '',
};

export default function(state: State = initialState, action: Action): State {
  if (action.type === 'SET_EMAIL') {
    return {
      ...state,
      email: action.payload,
    };
  }
  return state;
}
