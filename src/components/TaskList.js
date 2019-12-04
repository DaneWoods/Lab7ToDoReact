import React, { Component } from 'react';
import Task from './Task.js';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render (){
        const { tasks, toggleTaskStatus, deleteTask } = this.props;
        return (
          <div>
              <ul className="list-group" id="taskList">
                { tasks.map((task, index) =>
                    <Task
                        key={index} task={task} index={index}
                        toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask}
                    />
                )}
              </ul>
          </div>
        )
    }
}

export default TaskList