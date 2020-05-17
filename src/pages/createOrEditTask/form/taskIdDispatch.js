
//@TODO: Left off here, need to test this.
const taskIdDispatch = (setTime, updateTask, setErrorFlashMessage) => data => {
    if (!data._id) {
        setErrorFlashMessage('Failed to Add/Edit a Task')
    }
    setTime(data.time);
    updateTask(data);
}

export default taskIdDispatch;