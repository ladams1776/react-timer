import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import TaskListForm from "./Form/TaskList/TaskListForm";
import EditTaskForm from "./Form/EditTask/EditTaskForm";

 
class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropDownListContracts: this.props.dropDownListContracts
        }
    }


  render() {
    return (
        <HashRouter>
        <div>
          <div className="content">
            {/* @todo: need to manage the state here, if we click on a link we need to hide the list, the edit form is showing */}
            <Route 
                path="/" 
                component={TaskListForm}
            />  

            <Route 
                path="/task/:id" 
                render={(props) => <EditTaskForm {...props} list={this.state.dropDownListContracts}/>}
            />

          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;