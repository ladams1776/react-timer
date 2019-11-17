export default class TaskFormatter {
  format(task, projects) {
    const taskWithProject = { ...task };

    taskWithProject.time = (task.time / 1000 / 60 / 60).toFixed(2);

    projects.forEach(project => {
      if (taskWithProject.contractId === project.key) {
        taskWithProject.contract = project.contract;
        taskWithProject.customer = project.customer;
      }
    });

    return taskWithProject;
  }
}
