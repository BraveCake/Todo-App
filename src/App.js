import logo from './logo.svg';
import './App.css';
import  Todos from './Todos'
import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import TodoModal from './Modal';
class App extends React.Component {
  state = window.localStorage.getItem("state")==undefined?{todos:[{id:1,content:"open todo list"},{id:2,content:"start adding things to the list"},{id:3,content:"click on items to remove them from the list"}]}:JSON.parse(localStorage.getItem("state"));
  saveChanges = ()=>localStorage.setItem("state",JSON.stringify(this.state));
  deleteTodo= (id)=>  {this.setState({todos: this.state.todos.filter(item=> item.id!==id)}); };
  addTodo = function (item) { console.log(item);this.setState({todos:[...this.state.todos ,item]});};
  render(){
    this.saveChanges(); 
  return (
<div className='App container'>
  <h1 className='center blue-text'>Todo App</h1>
  <Todos todos={this.state.todos} deleteTodo= {this.deleteTodo} />
<TodoModal text="Add todo" header="Add an item to the list" action={(item)=>this.addTodo({id:(this.state.todos.at(-1)?.id||0)+1,content:item})} />
</div> 
  );
}
}
export default App;
