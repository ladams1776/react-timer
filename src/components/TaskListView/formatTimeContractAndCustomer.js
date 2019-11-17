import displayMsInFractionalHourFormat from '../../utils/DisplayTime';

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

  taskWithProject.contract = projects[task.contractId].contractId;
  taskWithProject.customer = projects[task.contractId].customer;

  return taskWithProject;
}
