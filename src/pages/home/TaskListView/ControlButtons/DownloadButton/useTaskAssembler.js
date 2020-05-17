import { getFormattedDate } from 'utils';
import { useTaskEditContext } from 'hooks';
import formatTimeContractAndCustomer from './formatTimeContractAndCustomer';
//@TODO: Write a test for this
const useTaskAssembler = () => {
    const { projects, tasks } = useTaskEditContext();

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