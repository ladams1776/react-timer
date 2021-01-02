import { useReducer } from 'react';

const initialState = {
  id: -1,
  time: 0,
  dateTimes: []
};

const formReducer = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

const useFormReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const onDateTimes = e => {
    dispatch({ dateTimes: e })
  }

  return [
    state,
    onDateTimes,
  ];
};

export default useFormReducer;
