import React from 'react';
import TaskList from './TaskList.js';
import TaskForm from './TaskForm.js';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    let tasks = [];
    if(localStorage.getItem("TASKS") && localStorage.getItem("TASKS" != null))
      tasks = JSON.parse(localStorage.getItem("TASKS"));
    this.state = {
      tasks: tasks,
      task: ''
    }
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTaskClick = this.addTaskClick.bind(this);
  }
  
  toggleTaskStatus(index){
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    console.log(tasks);
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({tasks});
  }

  deleteTask(index){
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    console.log(index);
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  addTaskClick(task){
    let newTask = {
      task: task,
      isComplete: false
    };
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks.push(newTask);
    this.setState({tasks});
  }

  render (){
    localStorage.setItem("TASKS", JSON.stringify(this.state.tasks));
    return (
      <div>This is the ToDo React App
        <TaskForm onSubmit={this.addTaskClick}/>
        <TaskList tasks={this.state.tasks}
          toggleTaskStatus={this.toggleTaskStatus} deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

export default App;
