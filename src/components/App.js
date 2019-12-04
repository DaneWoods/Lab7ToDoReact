import React from 'react';
import TaskList from './TaskList.js';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: 
        [
            {task: 'Go to Dentist', isComplete: false},
            {task: 'Do Gardening', isComplete: true},
            {task: 'Renew Library Account', isComplete: false},
        ]
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

  deleteTask(event, index){
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  addTaskClick(){
    console.log("addtaskclick");
    /*let addTB = document.getElementById("addTask");
    const text = addTB.value;
    if(text == "")
    {
      addTB.parentElement.classList.add("has-error");
    }
    else{
      addTB.parentElement.classList.remove("has-error");
      let newTask = {
        task: text,
        isComplete: false
      }
      this.tasks.push(newTask);
      this.loadTasks();
      addTB.value = "";
    }*/
  }

  render (){
    return (
      <div>This is the ToDo React App
        <TaskList tasks={this.state.tasks}
          toggleTaskStatus={this.toggleTaskStatus} deleteTask={this.deleteTask}/>
      </div>
    )
  }
}

export default App;
