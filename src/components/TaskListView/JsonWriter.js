const FileSaver = require('file-saver');

export default class JsonWriter {
  write(taskBundle) {
    let json = JSON.stringify(taskBundle);
    let blob = new Blob([json], { type: 'application/json' });
    let fileName =
      new Date().toString() +
      '_' +
      taskBundle.description +
      '_' +
      taskBundle.time +
      '.json';
    FileSaver.saveAs(blob, fileName);
  }
}
