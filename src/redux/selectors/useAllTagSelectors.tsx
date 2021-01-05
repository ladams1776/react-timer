import { useSelector } from "react-redux";

const useAllTagSelectors = () => {
    return useSelector((state: State): ReturnedState => {
        return {
            ...state.tasks.allTags,
        };
    });
};

export default useAllTagSelectors;

interface State {
    tasks: {
        allTags: []
    }
}

interface ReturnedState {
    
}