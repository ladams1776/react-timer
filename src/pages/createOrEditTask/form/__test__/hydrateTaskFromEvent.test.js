import hydrateTaskFromEvent from '../hydrateTaskFromEvent';

describe('src/pages/createOrEditTask/form/__test__/hydrateTaskFromEvent.test.js', () => {
  describe('hydrateTaskFromEvent', () => {
    // Arrange
    const dateFormatted = 'a-date';
    const time = 'a-time';
    const selectedTags = 'some-tags';

    it('should return a task in the right format, with all values', () => {
      // Arrange
      const event = {
        id: 'id',
        selectedProject: 'project',
        description: 'description',
      };
      const expected = {
        _id: event.id,
        date: dateFormatted,
        WorkUnit: [
          {
            time,
            contractId: event.selectedProject,
            description: event.description,
            tags: selectedTags,
          },
        ],
      };

      // Act
      const actual = hydrateTaskFromEvent(
        event,
        dateFormatted,
        time,
        selectedTags,
      );

      // Assert
      expect(actual).toEqual(expected);
    });

    it('should return a task in the right format, without all values', () => {
      // Arrange
      const event = {
        id: 'id',
      };
      const dateFormatted = 'a-date';
      const time = 'a-time';
      const selectedTags = 'some-tags';

      const expected = {
        _id: event.id,
        date: dateFormatted,
        WorkUnit: [
          {
            time,
            contractId: 0,
            description: '',
            tags: selectedTags,
          },
        ],
      };
      
      // Act
      const workUnit = hydrateTaskFromEvent(
        event,
        dateFormatted,
        time,
        selectedTags,
      );

      // Assert
      expect(workUnit).toEqual(expected);
    });
  });
});
