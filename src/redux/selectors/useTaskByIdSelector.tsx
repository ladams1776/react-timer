import { useSelector } from 'react-redux';

const useTaskByIdSelector = (): ReturnedState => {
  return useSelector(
    (state: State): ReturnedState => {
      return {
        id: state.tasks.taskById._id,
        ...state.tasks.taskById,
        project: state?.tasks?.taskById?.contractId,
      };
    },
  );
};

export default useTaskByIdSelector;

interface State {
  tasks: {
    taskById: {
      _id: string;
      contractId: string;
      description: string;
    };
  };
}

interface ReturnedState {
  id: string;
  _id: string;
  description: string;
  contractId: string;
  project: string;
}
