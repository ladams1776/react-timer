import { useSelector } from "react-redux";

const useAllTagSelectors = () => {
    return useSelector(state => {
        return {
            ...state.tasks.allTags,
        };
    });
};

export default useAllTagSelectors;