import React from "react";
import './FlashMessage.css';

export default class FlashMessage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            message: props.message,
            opacity: this.props.opacity,            
        }


        this.handleClick = this.handleClick.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.opacity !== prevState.opacity) {
            return { opacity: nextProps.opacity};
       }
       else return null;
     }
     
     componentDidUpdate(prevProps, prevState) {
       if(prevProps.opacity!==this.state.opacity){
        this.setState({opacity: prevProps.opacity});
       }
     }


    handleClick = (e) => {
        // this.props.opacity = 0;
        this.props.handler(0);  
    }

    render() {
        return <div className="flash-message" onClick={this.handleClick} style={{opacity: this.state.opacity}}>{this.state.message}</div>
    }
}