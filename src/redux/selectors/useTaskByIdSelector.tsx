import { DateTimeInterface } from 'interfaces/pages/tasks/Task';
import { useSelector } from 'react-redux';

const useTaskByIdSelector = (): ReturnedTaskState => {
  return useSelector(
    (state: State): ReturnedTaskState => {
      return {
        ...state.tasks.taskById,
        id: state?.tasks?.taskById?._id,
        project: state?.tasks?.taskById?.contractId,
      };
    },
  );
};

export default useTaskByIdSelector;

interface State {
  tasks: {
    taskById: ReturnedTaskState;
  };
}

interface ReturnedTaskState {
  id: string;
  _id: string;
  description: string;
  contractId: string;
  project: string;
  dateTimes: DateTimeInterface[];
  time: number;
}
