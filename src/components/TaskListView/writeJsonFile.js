var FileSaver = require('file-saver');

export default function writeJsonFile(taskBundle) {
  let json = JSON.stringify(taskBundle);
  let blob = new Blob([json], { type: 'application/json' });
  let fileName = 'time-logs_' + taskBundle.date + '.json';
  FileSaver.saveAs(blob, fileName);
}
