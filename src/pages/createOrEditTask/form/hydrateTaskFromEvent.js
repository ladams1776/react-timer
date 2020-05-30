import { selectEventTags } from '../selectors';

const contractIdSelector = event => event?.selectedProject || 0;
const descriptionSelector = event => event?.description || '';

const hydrateTaskFromEvent = (event, dateFormatted, time, tags) => {
  const selectTags = selectEventTags(tags);
  const selectedTags = selectTags(event.tags);

  return {
    _id: event.id,
    date: dateFormatted,
    WorkUnit: [
      {
        time,
        contractId: contractIdSelector(event),
        description: descriptionSelector(event),
        tags: selectedTags,
      },
    ],
  };
};

export default hydrateTaskFromEvent;
