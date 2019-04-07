import React from 'react';
import ms from 'pretty-ms';
import './Timer.css';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskId: this.props.taskId ? this.props.taskId : -1,
            time: 0,
            isOn: false,
            start: 0,
            stoppedTimeAt: 0,
        };

        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }


    componentDidMount() {
        const taskId = this.state.taskId;

        if (taskId !== -1) {
            fetch('http://localhost:3001/api/task/' + taskId)
                .then(response => {
                    return response.json();
                })
                .then((task) => {
                    this.setState({
                        taskId: task._id,
                        time: task.time,
                    });

                    this.setState({ stoppedTimeAt: task.time });
                    this.props.handler(task.time)
                });
        }


    }


    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        });

        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopTimer = (e) => {
        this.setState({ isOn: false });
        clearInterval(this.timer);
        let timePassed = this.state.time;
        this.setState({ stoppedTimeAt: timePassed });
        this.props.handler(timePassed)
    }

    resetTimer() {
        this.stopTimer();
        this.setState({ time: 0, isOn: false });
    }





    render() {

        let start = (this.state.time === 0 && !this.state.isOn)
            ? <button className="timer__start" onClick={this.startTimer}>start</button>
            : null

        let stop = (this.state.isOn)
            ? <button className="timer__stop" onClick={this.stopTimer}>stop</button>
            : null

        let resume = (this.state.time !== 0 && !this.state.isOn)
            ? <button className="timer__resume" onClick={this.startTimer}>resume</button>
            : null

        let reset = (this.startTimer.isOn || this.state.time > 0)
            ? <button className="timer__reset" onClick={this.resetTimer}>reset</button>
            : null


        return (
            <div className="timer">
                <div className="timer__display">
                    <label className="timer__display__label">Time: </label>
                    <div className="timer__display__content">
                        {ms(this.state.time)} - hours: {((((this.state.time / 1000) / 60) / 60)).toFixed(2)}
                    </div>
                </div>

                <div className="timer__buttons">
                    {start}
                    {resume}
                    {stop}
                    {reset}
                </div>

            </div>
        );
    }
}
