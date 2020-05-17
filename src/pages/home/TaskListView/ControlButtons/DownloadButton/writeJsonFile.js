var FileSaver = require('file-saver');

/**
 * Not exporting default, so we can spyOn
 * @param {Object} taskBundle
 */
export function writeJsonFile(taskBundle) {
  let json = JSON.stringify(taskBundle);
  let blob = new Blob([json], { type: 'application/json' });
  let fileName = 'time-logs_' + taskBundle.date + '.json';
  FileSaver.saveAs(blob, fileName);
}
