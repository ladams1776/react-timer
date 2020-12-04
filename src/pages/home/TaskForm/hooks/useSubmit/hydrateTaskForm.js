import { selectTags } from '../../selectors';

const hydrateTaskForm = (id, tags, project, description, dateFormatted, time, tagSelectedOption) => {
  const selectedTags = selectTags(tags)(tagSelectedOption);

  return {
    _id: id,
    date: dateFormatted,
    WorkUnit: [
      {
        time,
        contractId: project,
        description,
        tags: selectedTags,
      },
    ],
  };
};

export default hydrateTaskForm;
