import React from 'react';
import ms from 'pretty-ms';
import './Timer.css';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            isOn: false,
            start: 0,
            stoppedTimeAt: 0,
        };

        this.startTimer = this.startTimer.bind(this);
        // this.stopTimer = this.stopTimer.bind(this);

        this.resetTimer = this.resetTimer.bind(this);
    }




    timerChangeHandler() {
       // this.setState({ time: event.target.value });
    //    console.log(this.props.time)
    //    console.log('timer was changed');
    //     console.log("Time passed is: " + timePassed);
        //@todo: we want to set the state of the time in the form, but we want this to come from the Timer
    //    this.setState({ time: 1 });
    //    this.state.time = time;
       return this.state.stoppedTimeAt;
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
        let timePassed = ((((this.state.time / 1000) / 60) / 60)).toFixed(2);
        this.setState({stoppedTimeAt: timePassed});
        this.props.handler(timePassed)
        //@todo: issue passing up the time through the handler.
        // this.state.handler(timePassed);
    }

    resetTimer() {
        this.setState({ time: 0, isOn: false });
    }





    render() {

        let start = (this.state.time === 0 && !this.state.isOn)
            ? <button className="timer__start  mt-5em   m-a   w-50" onClick={this.startTimer}>start</button>
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
            <div className="timer mt-1em">
                <label className="timer__label">
                    timer: 
                </label>
                <div>
                    {ms(this.state.time)} - hours: {((((this.state.time / 1000) / 60) / 60)).toFixed(2)}    
                </div>
                {start}
                <div className="w-140 m-a mt-25">
                    {resume}
                    {stop}
                    {reset}
                </div>
            </div>
        )
    }
}
