import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form';



// const list = [
//     {
//         value: 0,
//         label: "New York",
//         selected: false,
//         key: 0
//     },
//     {
//         value: 1,
//         label: 'Dublin',
//         selected: false,
//         key: 1
//     },
//     {
//         value: 2,
//         label: 'California',
//         selected: false,
//         key: 2
//     },
//     {
//         value: 3,
//         label: 'Istanbul',
//         selected: false,
//         key: 3
//     },
//     {
//         value: 4,
//         label: 'Izmir',
//         selected: false,
//         key: 4
//     },
//     {
//         value: 5,
//         label: 'Oslo',
//         selected: false,
//         key: 5
//     }
// ];

const list = require('./resources/dropdownDefinition.json');

// ========================================

ReactDOM.render(
    // <Form list={JSON.parse('../resources/dropdownDefinition.js')}/>,
    <Form list={list} />,
    document.getElementById('root')
);