var FileSaver = require('file-saver');
import writeJsonFile from '../writeJsonFile';
import formatTimeContractAndCustomer from '../formatTimeContractAndCustomer';
import displayMsInFractionalHourFormat from '../../../utils/DisplayTime';

describe('src/components/TaskListView/__test__/writeJsonFile.test.js', () => {
  describe('writeJsonFile', () => {
    const task = {
      time: 10000,
      description: 'task description becomes file name',
    };

    it('should write the task into a json file', () => {
      jest.mock('file-saver', () => ({ saveAs: jest.fn() }));
      const stringifyJSON = JSON.stringify(task);
      global.Blob = function(content, options) {
        return { content, options };
      };

      writeJsonFile(task);
      expect(FileSaver.saveAs).toHaveBeenCalledWith(
        blob(
          [stringifyJSON],
          { type: 'application/json' },
          new Date().toString() + '_' + task.description + '_' + task.time + '.json'
        )
      );
    });
  });
});
