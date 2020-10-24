import { useReducer } from 'react';

//@TODO: Need to unit test this.
const initialState = {
  id: -1,
  description: '',
  tags: [],
  project: 0,
  time: 0,
  dateTime: []
};

const formReducer = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

const useFormReducer = () => {
  const onProjectDropDownChange = e => {
    dispatch({ project: e.target.value });
  };

  const onTextAreaChange = e => {
    dispatch({ description: e });
  };

  const onTagChange = e => {
    dispatch({ tags: e });
  };

  const onDateTime = e => {
    dispatch({ dateTime: e })
  }

  const [state, dispatch] = useReducer(formReducer, initialState);
  return [
    state,
    dispatch,
    onProjectDropDownChange,
    onTextAreaChange,
    onTagChange,
    onDateTime
  ];
};

export default useFormReducer;
