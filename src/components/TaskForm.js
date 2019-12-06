import React, { Component } from 'react';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: ''
        };
        this.inputChanged = this.inputChanged.bind(this);
        this.submitTask = this.submitTask.bind(this);
    }

    inputChanged(e) {
        const {value} = e.target;
        this.setState( {task: value} );
    }

    submitTask(e){
        e.preventDefault();
        const {task} = this.state;
        const {onSubmit} = this.props;
        onSubmit(task);
        this.setState({task : ''});
    }

    render (){
        return (
        <form onSubmit={this.submitTask}>
            <div className="row input-area">
                <div className="col-md-1"></div>
                <div className="form-group col-md-9">
                    <input type="text" placeholder="New Task" className="form-control" onChange={this.inputChanged} id="addTask" value={this.state.task}/>
                </div>
                <div className="form-group col-md-1">
                    <button className="btn btn-primary">Add</button>
                </div>
                <div className="col-md-1"></div>
            </div>
        </form>
        );
    }
}

export default TaskForm