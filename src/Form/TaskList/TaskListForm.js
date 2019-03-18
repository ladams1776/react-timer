import React from 'react';


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
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tasks = data.map((task) => {
                return(
                    <li>{task.description}</li>
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