import React, { Component } from 'react';

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onToggleTaskStatus = this.onToggleTaskStatus.bind(this);
    }

    onDeleteTask(event){
      event.preventDefault();
      const {deleteTask, index} = this.props;
      console.log(index + "Task");
      deleteTask(index);
    }

    onToggleTaskStatus(){
        const {toggleTaskStatus, index} = this.props;
        toggleTaskStatus(index);
    }

    render (){
        const {task} = this.props;
        const taskClass = `col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${(task.isComplete)? 'complete' : ''}`
        const checked = (task.isComplete)?"checked":"";
        return (
            <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" value="" 
                checked={checked}
                onChange={this.onToggleTaskStatus} /></label>
              </div>
              <div className={taskClass}>
                {task.task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a className="" href="/" onClick={this.onDeleteTask}>
                    <i id="deleteTask" className="delete-icon glyphicon glyphicon-trash"></i>
                </a>
              </div>
            </div>
          </li>
        )
    }
}

export default Task