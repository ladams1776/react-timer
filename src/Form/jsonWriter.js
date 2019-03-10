var FileSaver = require('file-saver');

export default class JsonWriter {

    write(project, task, time, description) {
        console.log('Write the details to a json file.');
        let data = {
            project: project,
            task: task,
            time: time,
            description: description
        };
        let json = JSON.stringify(data);
        let blob = new Blob([json], {type: "application/json"});
        let fileName = project + task + time +".json";
        FileSaver.saveAs(blob, fileName);
    }
}