import hydrateTaskForm from '../hydrateTaskForm';
import selectTags from '../../../selectors/selectTags';

jest.mock('../../../selectors/selectTags');

describe('hydrateTaskForm', () => {
  it('should return a task in the right format, with all values', () => {
    // Arrange
    const id = 1;
    const tags = [{ id: 'tagID' }];
    const project = { id: 'projectId' };
    const description = 'description';
    const dateFormatted = 'dateFormatted';
    const time = 'time';
    const tagSelectedOption = 1;
    const selectedTags = jest.fn().mockImplementation(() => tagSelectedOption);

    const selectTagSpy = jest.fn().mockImplementation(() => selectedTags);
    selectTags.mockImplementation(selectTagSpy);

    // Act
    const actual = hydrateTaskForm(id, tags, project,
      description, dateFormatted, time, tagSelectedOption);

    // Assert
    expect(actual).toEqual({
      _id: id,
      date: dateFormatted,
      WorkUnit: [
        {
          time,
          contractId: project,
          description,
          tags: tagSelectedOption
        }
      ]
    });
  });
});