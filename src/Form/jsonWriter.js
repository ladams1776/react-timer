// import 'file-saver';

// export default class ReservationEventJSONWriter {

//     constructor() {}

//     writeReservation(eventName, dates, url, partySize, time) {
//         console.log('Write the details to a json file.');
//         let data = {
//             eventName: eventName,
//             dates: dates,
//             url: url,
//             partySize: partySize,
//             time: time
//         };
//         let json = JSON.stringify(data);
//         let blob = new Blob([json], {type: "application/json"});
//         let fileName = eventName+".json";
//         saveAs(blob, fileName);
//     }
// }