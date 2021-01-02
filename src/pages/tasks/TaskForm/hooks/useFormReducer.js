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

  const dispatchTask = data => {
    dispatch({
      id: data._id,
      time: data.time,
      dateTimes: data.dateTimes,
      description: data.description,
      tags: data.tags,
      project: data.contractId,
    });
  }

  return [
    state,
    onDateTimes,
    dispatchTask
  ];
};

export default useFormReducer;
