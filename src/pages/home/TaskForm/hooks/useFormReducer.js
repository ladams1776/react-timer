import { useReducer } from 'react';

const initialState = {
  id: -1,
  description: '',
  tags: [],
  project: 0,
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

  const onProjectDropDownChange = e => {
    dispatch({ project: e.target.value });
  };

  const onTextAreaChange = e => {
    dispatch({ description: e });
  };

  const onTagChange = e => {
    dispatch({ tags: e });
  };

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
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
    
    onDateTimes,
    dispatchTask
  ];
};

export default useFormReducer;
