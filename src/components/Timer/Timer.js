import React from 'react';
import ms from 'pretty-ms';


export default class Timer extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            isOn: false,
            start: 0
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
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

    stopTimer() {
        this.setState({isOn: false});
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setState({time:0, isOn: false});
    }


    render() {

        let start = (this.state.time === 0 && !this.state.isOn) 
        ? <button onClick={this.startTimer}>start</button> 
        : null

        let stop = (this.state.isOn)
        ? <button onClick={this.stopTimer}>stop</button>
        : null

        let resume = (this.state.time !== 0 && !this.state.isOn)
        ? <button onClick={this.startTimer}>resume</button>
        : null

        let reset = (this.state.time > 0)
        ? <button onClick={this.resetTimer}>reset</button>
        : null


        return (
            <div>
                <h3>timer: {ms(this.state.time)} - hours: {((((this.state.time / 1000) / 60) / 60)).toFixed(2)} </h3>
                {start}
                {resume}
                {stop}
                {reset} 
            </div>
        )
    }
}
