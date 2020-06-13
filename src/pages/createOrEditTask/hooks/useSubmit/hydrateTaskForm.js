import { selectTags } from '../../selectors';

const hydrateTaskForm = (state, tags, payload) => {
  const selectPayloadTags = selectTags(tags);
  const selectedTags = selectPayloadTags(payload.tagSelectedOption);

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
