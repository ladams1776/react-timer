import { displayMsInFractionalHourFormat } from 'utils';

/**
 * Take a task object and an array of projects and reformat the
 * task object something that can be aggregated and written into
 * a json file.
 *
 * @param {Object} task: a Task object
 * @param {Array} projects: array of projects.
 * @returns {Object} a task that has a format for a json file.
 */
export default function formatTimeContractAndCustomer(task, projects) {
  const taskWithProject = { ...task };

  taskWithProject.time = displayMsInFractionalHourFormat(task.time);

  projects.forEach(project => {
    if (taskWithProject.contractId === project.key) {
      taskWithProject.contract = project.contract;
      taskWithProject.customer = project.customer;
    }
  });

  return taskWithProject;
}
