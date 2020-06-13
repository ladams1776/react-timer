import hydrateTaskForm from '../hydrateTaskForm';
import selectEventTags from '../../../selectors/selectEventTags';

jest.mock('../../../selectors/selectEventTags');

describe('src/pages/createOrEditTask/form/__test__/hydrateTaskForm.test.js', () => {
  describe('hydrateTaskForm', () => {
    // Arrange
    const state = {
      id: 1,
    };
    const tags = [{ _id: 1 }];
    const payload = {
      dateFormatted: 'a-date',
      time: 'a-time',
      project: 1,
      selectedTags: [{ _id: 1 }],
      description: 'description',
    };

    beforeEach(() => {
      selectEventTags.mockReturnValue(() => tags);
    });

    it('should return a task in the right format, with all values', () => {
      // Arrange
      const expected = {
        _id: state.id,
        date: payload.dateFormatted,
        WorkUnit: [
          {
            time: payload.time,
            contractId: payload.project,
            description: payload.description,
            tags,
          },
        ],
      };

      // Act
      const actual = hydrateTaskForm(state, tags, payload);

      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
