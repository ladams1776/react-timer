const taskIdDispatch = (setTime, updateTask) => data => {
  setTime(data.time);
  updateTask(data);
};

export default taskIdDispatch;
