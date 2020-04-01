import { useContext } from 'react';
import TaskEditFormContext from '../contexts/TaskEditFormContext';

const useTaskEditContext = () => useContext(TaskEditFormContext);

export default useTaskEditContext;
