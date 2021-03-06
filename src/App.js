import './App.css';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={tasks:[
      {task:"Go to shopping", isDone:false},
      {task:"Do homework", isDone:true}
    ]}; 
 }
  render() {
    return (
    <div className="App">
      <h1>My Todos</h1>
      <ul className="todos-list">
        { this.state.tasks.map((value,index)=>
        <li key={index}>
          <input type="checkbox" checked={value.isDone} onChange={(e) =>this.updateTodoStatus(e,index)}/>
          {value.task}
        </li>
       )}
      </ul>
    </div>
    );
  }
  updateTodoStatus(e,index){
   // console.log(index +". eleman değişti.Yeni sçililik durumu" +e.target.checked);
     const newTodos=[...this.state.tasks];
     newTodos[index].isDone=e.target.checked;
     console.log(newTodos);
     this.setState({task:newTodos});
  }
}

export default App;

