import { selectEventTags } from '../../selectors';

const hydrateTaskForm = (state, tags, payload) => {
  const selectTags = selectEventTags(tags);
  const selectedTags = selectTags(payload.tagSelectedOption);

  return {
    _id: state.id,
    date: payload.dateFormatted,
    WorkUnit: [
      {
        time: payload.time,
        contractId: payload.project,
        description: payload.description,
        tags: selectedTags,
      },
    ],
  };
};

export default hydrateTaskForm;
