const contractIdSelector = event => event?.selectedProject || 0;
const descriptionSelector = event => event?.description || '';

const hydrateTaskFromEvent = (event, dateFormatted, time, selectedTags) => {
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
