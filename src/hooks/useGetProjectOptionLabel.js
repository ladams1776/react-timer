import useFetchProjectOptions from './useFetchProjectOptions';

//@TODO: Need to test this
const useGetProjectOptionLabel = taskProjectOptionId => {
    const projectOptions = useFetchProjectOptions();
    return projectOptions.filter(project => project.value === taskProjectOptionId)[0].label;
}

export default useGetProjectOptionLabel;