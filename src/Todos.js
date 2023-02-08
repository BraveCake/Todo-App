import React from "react";
function Todos(props)
{
    const todoList= props.todos.length? props.todos.map(item=> (<div className="collection-item" key={item.id} ><span onClick={()=> props.deleteTodo(item.id)}>{item.content}</span></div>)): (<p className="center blue-text"> you do not have any todos left</p>);
    return(
        <div className="todos collection">
            {todoList} 
        </div>
    )
}
export default Todos;