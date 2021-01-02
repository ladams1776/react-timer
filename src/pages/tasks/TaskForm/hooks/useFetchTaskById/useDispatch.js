const useDispatch = (setTime, dispatchTask) => {
    return data => {
        setTime(data.time);
        return dispatchTask(data);
    }
};

export default useDispatch;