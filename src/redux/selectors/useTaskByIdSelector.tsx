import { useSelector } from "react-redux";

const useTaskByIdSelector = (): ReturnedState => {
    return useSelector((state: State): ReturnedState => {
        return {
            ...state.tasks.taskById,
            project: state?.tasks?.taskById?.contractId,
        };
    });
};

export default useTaskByIdSelector;

interface State {
    tasks: {
        taskById: {
            contractId: string;
        };
    }
};
    
interface ReturnedState {
    contractId: string;
    project: string;
};