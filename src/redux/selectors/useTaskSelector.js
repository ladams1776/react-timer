import { useSelector } from "react-redux";

const useTaskSelector = () => {
    return useSelector(state => {
        return {
            ...state.tasks.taskById,
            project: state?.tasks?.taskById?.contractId
        };
    });
};

export default useTaskSelector;