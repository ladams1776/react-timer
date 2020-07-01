import useFetchProjectOptions from './useFetchProjectOptions';

const useGetProjectOptionLabel = taskProjectOptionId => {
    const projectOptions = useFetchProjectOptions();
    const projectOptionLabels = projectOptions.filter(project => (+project.value) === taskProjectOptionId);
    return projectOptionLabels[0]?.label;
}

export default useGetProjectOptionLabel;