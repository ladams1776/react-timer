import { getFormattedDate } from 'utils';
import { useFetchProjectOptions } from 'hooks';
import formatTimeContractAndCustomer from './formatTimeContractAndCustomer';

//@TODO: Write a test for this
const useTaskAssembler = (...tasks) => {
    const projects = useFetchProjectOptions();

    const dateFormatted = getFormattedDate(new Date());

    const timeTask = {
        date: dateFormatted
    };

    timeTask.WorkUnit = tasks.map(task =>
        formatTimeContractAndCustomer(task, projects)
    );

    return () => timeTask;
}

export default useTaskAssembler;