import { useSelector } from "react-redux";

const useTaskByIdSelector = () => {
    return useSelector(state => {
        return {
            ...state.tasks.taskById,
            project: state?.tasks?.taskById?.contractId
        };
    });
};

export default useTaskByIdSelector;