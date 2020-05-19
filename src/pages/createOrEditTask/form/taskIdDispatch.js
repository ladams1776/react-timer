
//@TODO: Left off here, need to test this.
const taskIdDispatch = (setTime, updateTask) => data => {
    setTime(data.time);
    updateTask(data);
}

export default taskIdDispatch;