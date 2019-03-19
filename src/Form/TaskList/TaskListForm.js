import React from 'react';
import './TaskListForn.css';

export default class TaskListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }


    componentDidMount() {
        this.setState({ tasks: null });
        console.log('component did mount');
        fetch('http://localhost:3001/task')
        .then(response => {
            return response.json()
        })
        .then(data => {
            let tasks = data.map((task) => {
                return(
                    <a href="#" id={task.key} class="task-list">
                        <span class="task-list__description">{task.description}</span>
                        <span class="task-list__customer">{task.customer}</span> - <span class="task-list__contract">{task.contract}</span>                        
                        <span class="task-list__time"><span class="task-list__time-label">Time:</span><span class="task-list__time-value">{task.time}</span></span>
                    </a>                                        
                )
            })
            this.setState({ tasks: tasks });
        });

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.tasks}
                </ul>
            </div>
        );
    }

}