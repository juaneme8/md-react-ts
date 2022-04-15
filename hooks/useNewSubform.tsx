import { useReducer } from 'react';
import { Sub } from '../types';

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
};
interface FormState {
  inputValues: Sub;
}

type FormReducerAction =
  | {
      type: 'change_value';
      payload: { inputName: string; inputValue: string };
    }
  | {
      type: 'clear_form';
    };

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case 'clear_form':
      return INITIAL_STATE;
  }
};
const useNewSubform = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubform;
